/** @format */

import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />)
		);
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		return (
			<Html lang="en-US">
				<Head></Head>
				<body>
					<Main></Main>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
