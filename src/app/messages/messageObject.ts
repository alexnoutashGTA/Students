

export class messageObject {
  public userName: string='';
  public message: string='';
  public dateTime: string='';
  constructor(usrName: string, msg: string) {
    this.userName = usrName;
    this.message = msg;

  }
}
