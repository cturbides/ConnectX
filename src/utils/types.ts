export type WaitingRoomStep = 'username' | 'roomID';

export type UsernameFormProps = {
    user: string;
    setStep: React.Dispatch<React.SetStateAction<WaitingRoomStep>>;
    setUser: React.Dispatch<React.SetStateAction<string>>;
};

export type RoomIDFormProps = {
    room: string;
    user: string;
    setRoom: React.Dispatch<React.SetStateAction<string>>;
};