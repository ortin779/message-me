import emailjs from '@emailjs/browser';
import { Component, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'message-me',
  styleUrl: 'message-me.css',
  shadow: true,
})
export class MessageMe {
  /**
   *Public Key of the Email JS
   */
  @Prop({ attribute: 'publicKey' }) publicKey!: string;

  /**
   *Email Service Id to send the email
   */
  @Prop({ attribute: 'serviceId' }) serviceId!: string;

  /**
   *Template id of the Email JS Template
   */
  @Prop({ attribute: 'templateId' }) templateId!: string;

  @State() fromName: string;
  @State() replyTo: string;
  @State() message: string;
  @State() isValid: boolean;
  @State() isLoading: boolean = false;
  @State() error: string = '';

  constructor() {
    this.handleFromNameChange = this.handleFromNameChange.bind(this);
    this.handleReplyToChange = this.handleReplyToChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleFromNameChange(e) {
    this.fromName = e.target.value;
  }

  handleReplyToChange(e) {
    this.replyTo = e.target.value;
  }

  handleMessageChange(e) {
    this.message = e.target.value;
  }

  @Watch('fromName')
  @Watch('replyTo')
  @Watch('message')
  validateForm() {
    const isFromNameValid = this.fromName && this.fromName.trim().length > 0;
    const isReplyToValid = this.isValidEmail(this.replyTo || '');
    const isMessageValid = this.message && this.message.trim().length > 0;

    this.isValid = isFromNameValid && isReplyToValid && isMessageValid;
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  handleResetForm() {
    this.message = '';
    this.fromName = '';
    this.replyTo = '';
  }

  async onSubmit(event: Event) {
    event.preventDefault();

    try {
      this.error = '';
      this.isLoading = true;
      await emailjs.send(
        this.serviceId,
        this.templateId,
        {
          from_name: this.fromName,
          reply_to: this.replyTo,
          message: this.message,
        },
        this.publicKey,
      );
      this.handleResetForm();
    } catch (error) {
      this.error = error;
    }
    this.isLoading = false;
  }

  render() {
    return (
      <Host>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.fromName} name="from_name" class="feedback-input" placeholder="Full Name" onChange={this.handleFromNameChange} />
          <input type="email" value={this.replyTo} name="reply_to" class="feedback-input" placeholder="Email" onChange={this.handleReplyToChange} />
          <textarea name="message" value={this.message} class="feedback-input" placeholder="Message" onChange={this.handleMessageChange} />
          {this.error && <p class="error-message">{this.error}</p>}
          {this.isLoading ? (
            <button class="submit-button" disabled={true}>
              <div class="loader" />
              Sending
            </button>
          ) : (
            <button disabled={!this.isValid} class="submit-button" type="submit">
              Send
            </button>
          )}
        </form>
      </Host>
    );
  }
}
