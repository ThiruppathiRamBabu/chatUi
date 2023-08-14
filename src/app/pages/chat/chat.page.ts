import { Component, OnInit } from '@angular/core';

enum Creator {
  Me = 0,
  Bot = 1,
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages = [
    {
      text: 'What is JavaScript?',
      from: Creator.Me,
    },
    {
      text: "JavaScript is a widely-used programming language that's primarily used for creating interactive and dynamic elements on websites. It allows developers to add functionality, manipulate content, and respond to user actions on web pages. JavaScript can be executed on the user's web browser, making it a core component of web development. It's not related to Java, despite the similar name.",
      from: Creator.Bot,
    },
    {
      text: 'is JavaScript safe thread?',
      from: Creator.Me,
    },
    {
      text: "JavaScript itself is single-threaded, meaning it executes one piece of code at a time in a sequential manner. This can be advantageous for simplicity and avoiding complex concurrency issues. However, it can also lead to performance bottlenecks, especially when dealing with intensive tasks. To overcome this limitation, modern browsers and environments have introduced technologies like Web Workers and Service Workers. These allow developers to execute JavaScript in separate threads, enabling better utilization of multi-core processors and improving the overall performance and responsiveness of web applications.So, while JavaScript is traditionally single-threaded, there are ways to work around this limitation in certain contexts to achieve better performance and responsiveness.",
      from: Creator.Bot,
    },
  ];

  constructor() { }

  ngOnInit() { }

  submit() { }

}
