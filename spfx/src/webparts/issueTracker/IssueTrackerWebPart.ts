import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "IssueTrackerWebPartStrings";
import IssueTracker from "./components/IssueTracker";
import { IIssueTrackerProps } from "./components/IIssueTrackerProps";

export interface IIssueTrackerWebPartProps {
  description: string;
}

export default class IssueTrackerWebPart extends BaseClientSideWebPart<
  IIssueTrackerWebPartProps
> {
  public render(): void {
    const element: React.ReactElement<IIssueTrackerProps> = React.createElement(
      IssueTracker,
      {
        description: this.properties.description
      }
    );
    // test comment
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
