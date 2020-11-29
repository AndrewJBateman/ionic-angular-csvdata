import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Papa } from "ngx-papaparse";
import { File } from "@ionic-native/file/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage {
	csvData: any[] = [];
	headerRow: any[] = [];

	constructor(
		private http: HttpClient,
		private papa: Papa,
		private plt: Platform,
		private file: File,
		private socialSharing: SocialSharing
	) {
		this.loadCSV();
	}

	// response type has to specified as default is json
	private loadCSV() {
		this.http
			.get("./assets/test.csv", {
				responseType: "text",
			})
			.subscribe(
				(data) => this.extractData(data),
				(err) => console.log("error: ", err)
			);
	}

	extractData(res: any) {
		const csvData = res || "";

		// parse data asynchronously as per papa parse documentation.
		this.papa.parse(csvData, {
			complete: (parsedData) => {
				this.headerRow = parsedData.data.splice(0, 1)[0];
				this.csvData = parsedData.data;
				console.log("my array: ", this.csvData);
			},
		});
	}

	// track changes to elements
	trackByFn(index: any, item: any) {
		return index;
	}

	exportCSV() {
		const csv = this.papa.unparse({
			fields: this.headerRow,
			data: this.csvData,
		});
		console.log("csv: ", csv);

		if (this.plt.is("cordova")) {
			this.file
				.writeFile(this.file.dataDirectory, "data.csv", csv, { replace: true })
				.then((res) => {
					this.socialSharing.share(null, null, res.nativeURL, null);
					// .then(e => {
					// 	// success
					// }).catch(e => {
					// 	console.log('share failed: ', e);
					// });
				});
		} else {
			// Dummy implementation for Desktop download purpose
			const blob = new Blob([csv]);
			const a = window.document.createElement("a");
			a.href = window.URL.createObjectURL(blob);
			a.download = "newdata.csv";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		}
	}
}
