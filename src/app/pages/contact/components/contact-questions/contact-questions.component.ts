import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-questions',
  templateUrl: './contact-questions.component.html',
  styleUrls: ['./contact-questions.component.scss']
})
export class ContactQuestionsComponent {
  faqs = [
    {
      question: 'What is Textbook Rental ?',
      answer: 'Textbook rental is simple! Now at The Bookstore, you can rent a range of textbooks, and then you return them at the end of the Rental Agreement by the Due Date.',
      open: false
    },
    {
      question: 'Can I purchase a digital book ?',
      answer: 'Yes, many titles are available in digital format from our online affiliates. You will see them listed along with other versions of the book, when available.',
      open: false
    },
    {
      question: 'Can I pick up the books in person ?',
      answer: 'Yes - choose "In-Store Pickup Next Business Day" as your shipping method. There is no charge for this service, and you can pick up the books without having to stand in line.',
      open: false
    },
    {
      question: 'Do you ship internationally ?',
      answer: 'Absolutely! Unfortunately, this website cannot generate international shipping quotes. If you\'d like to have your books shipped outside of USA.',
      open: false
    },
    {
      question: 'Are shipping charges per book ?',
      answer: 'Shipping charges are per order. It is the same price to have one book shipped or several as long as they are shipped in the same package.',
      open: false
    }
  ]

  toggleAccordion(faq: any): void {
    this.faqs.forEach((faqItem) => {
      if (faqItem !== faq) {
        faqItem.open = false;
      }
    });
    faq.open = !faq.open;
  }
}
