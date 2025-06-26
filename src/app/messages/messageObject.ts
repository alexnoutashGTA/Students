

export class messageObject {
  public userName: string='';
  public message: string='';
  public dateTime: string='';
  constructor(usrName: string, msg: string, dateTime: string) {
    this.userName = usrName;
    this.message = msg;
    this.dateTime = dateTime;
  }
}
