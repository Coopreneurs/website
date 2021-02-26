/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Contact extends React.Component {
	render() {
		const {siteConfig} = this.props;
		const pageUrl = (page) =>
			this.props.config.url + 
			this.props.config.baseUrl +
			page;
		const successURL = pageUrl("success.html");
		return (
			<div className="mainContainer">
				<Container padding={["bottom", "top"]}>
					<div className="showcaseSection">
						<div className="prose">
							<h1>Register to our online meetup.</h1>
							<p>
								Our virtual meetup takes place at the first Wednesday every
								month at 8pm. Please join us, if you'd like to talk to us. It's
								open for everyone no matter the background.
							</p>
							<form
								action="https://formspree.io/f/xzbkldeq"
								method="POST"
							>
								<label>
									Your Email:
									<input type="text" name="_replyto" />
								</label>
								<input type="hidden" name="_next" value={successURL} />
								<p id="meetupError" style={{ display: "none" }}>
									There was an issue registering. Please try again later.
								</p>
								<button className="button" type="submit">Register</button>
							</form>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

module.exports = Contact;