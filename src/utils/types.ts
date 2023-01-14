export type WaitingRoomStep = 'username' | 'roomID';
export type UsernameFormProps = {
    user: string;
    setStep: React.Dispatch<React.SetStateAction<WaitingRoomStep>>;
    setUser: React.Dispatch<React.SetStateAction<string>>;
};