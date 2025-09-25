import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

type PostLoginParams = {
  loginBody: { userName: string; password: string };
}
type PostMessageParams = {
  messageBody: { senderID: string | null | undefined; receiverID: string |null|undefined, message: string|null|undefined };
}

type getDetailParams = {
  detailBody: { studentId: string | null | undefined };
}

@Injectable()
export class ContentService {

  //private  serverAddress = 'https://mybookciti.azurewebsites.net';
  private  serverAddress = 'http://localhost:3000';

  private remoteContent: object[] = [];
  /* Only ContentService class has access to this private array*/
  private faqContent: string[] = [
    ` How do I view my Friends List on MyBook?
    To see all your connections, click the Friends icon in the top navigation bar. Your Friends List displays each friend’s profile photo, name, and online status. You can use the search box to quickly find a specific friend by name`,

    `Can I organize or sort my Friends List?
  Yes! MyBook lets you:

    Sort alphabetically (A–Z or Z–A)

  Filter by online status (Online now vs. Offline)

  Create custom groups (e.g., “Family,” “Colleagues”)
  Simply click the Sort & Filters button within the Friends List to apply your preferred view.`,

    `How do I start a new chat with a friend?
  From your Friends List:

    Hover over a friend’s profile tile.

  Click the Chat button (chat bubble icon).

  The Chat Window opens, showing any prior messages and allowing you to send a new message instantly.`,

    `Where can I find my chat history on MyBook?
  All your conversations are stored in the Chats tab. To access:

    Click the Chats icon in the sidebar.

  Select a conversation thread—your full chat history with that friend will load, including photos, links, and timestamps.`,

    `Is my chat history private and secure?
  Absolutely. MyBook uses end-to-end encryption for all 1‑on‑1 chats. Only you and the intended recipient can read your messages. We never store your decryption keys on our servers.`,

    `How do I delete or archive old conversations?
  In the Chats tab:

    Delete a chat: Hover over the conversation and click the trash icon. Deleted chats are permanently removed.

  Archive a chat: Click the archive box icon to hide the thread without deleting it. You can restore archives anytime from Archived Chats.`,

    `Can I search within my chat history?
  Yes—use the Search Chat bar at the top of the Chats tab. Enter a keyword, and MyBook will surface matching messages, images, and links from your chat history in real time.`,

    `How do I manage friend requests and pending chats?
  Pending Friend Requests appear at the top of your Friends List under Requests. Click Accept or Decline.

  Pending Chats (from non-friends) show in the Chats tab under Message Requests. Approve to move them into your main chat list, or ignore to dismiss.'`,

    `Can I export my Friends List or chat history?
  MyBook offers a Data Export tool under Settings > Privacy & Data. You can download:

    A CSV file of your Friends List (names, profile URLs, friendship date)

  A ZIP of your Chat History (JSON or TXT format) for personal backup.`,

    `How do I report or block someone from my Friends List or chats?
  Block a user: Open the chat window, click the friend’s name at the top, and select Block User—this removes them from your Friends List and prevents further messages.`
  ];

  getFaqContent(){
    return this.faqContent;
  }
  // Dependency Injection
  constructor(private http: HttpClient ) {
    this.getLocalFaqData().subscribe(asyncCallResponse => {
        asyncCallResponse.forEach((response: any) => {
          this.remoteContent.push(response)
        })
      }
    )
  }

  getLocalFaqData() {
    const url = `${this.serverAddress}/faqs`; // Example URL
    return this.http.get<any[]>(url);
  }
  getMessages() {
    const url = `${this.serverAddress}/messages`; // Example URL
    return this.http.get<any[]>(url);
  }
  getDetail({detailBody}: getDetailParams) {
    const url = `${this.serverAddress}/personalInfo`; // Example URL
    return this.http.post<any[]>(url,detailBody);
  }

  postLogin({loginBody}: PostLoginParams){
    const url = `${this.serverAddress}/login`; // Example URL
    return this.http.post(url, loginBody);
  }

  postNessage({messageBody}: PostMessageParams){
    const url = `${this.serverAddress}/message`; // Example URL
    return this.http.post(url, messageBody);
  }

  // Encapsulation :)
  getRemoteContent() {
    return this.remoteContent;
  }

  updatePersonalInfo({messageBody}: PostMessageParams) {
      const url = `${this.serverAddress}/personalInfoUpdate`;
      console.log(messageBody)// Example URL
      return this.http.post(url, messageBody);
    }
}
