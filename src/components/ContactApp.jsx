import React, { Component } from "react";
import Adding from "./Adding";
import Listing from "./Listing";
import Searching from "./Searching";
import Category from "./Category";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "bootstrap";

export class ContactApp extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="w-75 mx-auto my-3">
					<div class="input-group gap-4 border border-secondary rounded-2 bg-light">
						<input
							type="text"
							class="form-control py-3"
							placeholder="Searching"
							aria-label="Recipient's username with two button addons"
						/>
						<div class="dropdown-center d-flex align-items-center justify-center">
							<button
								class="btn btn-outline-white border dropdown-toggle form-control bg-white"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								REACT N1
							</button>
							<ul class="dropdown-menu">
								<li>
									<a class="dropdown-item" href="#">
										REACT N2
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										REACT N3
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										REACT N4
									</a>
								</li>
							</ul>
						</div>
						<button class="btn btn-outline-success" type="button">
							ADD STUDENT
						</button>
					</div>
                    

					<Adding />
					<Listing />
					<Category />
					<Searching />
				</div>
			</React.Fragment>
		);
	}
}

export default ContactApp;
