import React, { Component } from "react";
import Layout from "../layout/layout";
import "./pageNotFound.scss";

export default class PageNotFound extends Component {
  render() {
    return (
      <Layout title="">
        <div className="page-not-found">
          <h1>Comming soon!</h1>
        </div>
      </Layout>
    );
  }
}
