import * as React from "react";
import styles from "./IssueTracker.module.scss";
import { IIssueTrackerProps } from "./IIssueTrackerProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class IssueTracker extends React.Component<
  IIssueTrackerProps,
  {}
> {
  public render(): React.ReactElement<IIssueTrackerProps> {
    return (
      <div className={styles.issueTracker}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Hey, hey, hey!</p>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn Everything</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
