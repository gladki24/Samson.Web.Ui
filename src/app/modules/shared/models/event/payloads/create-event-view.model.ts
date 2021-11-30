export interface CreateEventViewModel {
  name: string;
  startDate: Date;
  endDate: Date;
  maximumParticipants: number;
  participantsId: string[];
  eventSupervisorId: string;
  gymRoomId: string;
}
