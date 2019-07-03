import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import NavigationLinks from "components/Header/NavigationLinks.jsx";
import SocialLinks from "components/Header/SocialLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import AboutSection from "./Sections/AboutSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class HomePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand=""
          leftLinks={<NavigationLinks />}
          rightLinks={<SocialLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "dark"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg5.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Welcome.</h1>
                  <h3 className={classes.subtitle}>
                    Lets make some websites together.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <AboutSection />
            <WorkSection />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(homePageStyle)(HomePage);
