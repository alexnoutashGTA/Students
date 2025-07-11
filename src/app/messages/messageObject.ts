

export class messageObject {
  public userName: string='';
  public message: string='';
  public dateTime: string='';
  public location: string='';
  constructor(usrName: string, msg: string, dateTime: string, location: string) {
    this.userName = usrName;
    this.message = msg;
    this.dateTime = dateTime;
    this.location = location;
  }
}
