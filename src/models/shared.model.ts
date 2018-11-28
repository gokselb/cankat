
export interface DateAndTime {
  date: string;
  time: string;
}


export interface ContactPerson {
  name:string;
  phone: string;
  email: string;
  role: string;
}

export interface Client {
  displayName: string;
  email: string;
}

export interface Event {
  title: string;
  location: string;
  start: DateAndTime;
  end: DateAndTime;
  keywords: string;
  organizer: Client;
  attendees: ContactPerson;
}

