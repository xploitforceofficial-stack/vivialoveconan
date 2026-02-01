
export interface RSVPData {
  name: string;
  attendance: 'hadir' | 'tidak_hadir';
  guests: number;
  message: string;
}

export interface EventDetail {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapLink: string;
}
