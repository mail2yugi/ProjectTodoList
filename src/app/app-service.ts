/**
 * Created by yugandhar.ds on 3/21/2017.
 */
export class BreadcrumbService {
  private _breadcrumbText : string;
  private _hyperLink:boolean;

  public getBreadCrumb() {
    return this._breadcrumbText;
  }

  public setBreadCrumb(text:string) {
    this._breadcrumbText = text;
  }

  public getHyperLink() {
    return this._hyperLink;
  }

  public setHyperLink(bool:boolean) {
    this._hyperLink = bool;
  }

}
