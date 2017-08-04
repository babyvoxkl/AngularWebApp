import { MessageDetailReturn } from "./message-detail-return";
import { MessageDetailError } from "./message-detail-error";

export class MessageDetail {
    Id: string;
    Type: string;
    Sn: string;
    Run: string;
    Original: string;
    OriginalMessage: string;
    Status: string;
    ReceivedDateTime: string;
    Retrun: MessageDetailReturn[];
    ErrorList: MessageDetailError[];
}