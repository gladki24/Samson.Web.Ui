import { Icon } from "../../shared/enums/icon.enum";

export type MenuButtonInfo = {
  text: string;
  url: string;
  icon: Icon;
}

/**
 * Describe sidebar button component
 */
export class MenuButton {

  /**
   * Text in button
   */
  public readonly text: string;

  /**
   * Destination navigate after button click
   */
  public readonly url: string;

  /**
   * Icon in button
   */
  public readonly icon: Icon;

  /**
   * Default constructor
   * @param info menu button plain object
   */
  public constructor(info: MenuButtonInfo) {
    this.text = info.text;
    this.url = info.url;
    this.icon = info.icon;
  }
}
