import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FAQ() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-2">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Find answers to common questions about Email Sender
      </p>

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Email Sender FAQ</CardTitle>
            <CardDescription>
              Common questions and answers about using the Email Sender
              application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is this application secure?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Yes, Email Sender is designed with security in mind. Your
                    Gmail credentials are:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Never stored on our servers</li>
                    <li>
                      Only kept in your browser's memory during the session
                    </li>
                    <li>Cleared when you close the page</li>
                    <li>Transmitted securely to Gmail's servers</li>
                  </ul>
                  <p className="mt-2">
                    We recommend using an App Password instead of your main
                    password for additional security.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What is an App Password and why do I need it?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    An App Password is a 16-character code that gives a less
                    secure app or device permission to access your Google
                    Account.
                  </p>
                  <p className="mb-2">
                    Google requires App Passwords for applications that don't
                    support their modern security standards. Using an App
                    Password is more secure than using your main password.
                  </p>
                  <p>
                    You can create an App Password in your Google Account
                    security settings under the 2-Step Verification section.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How many emails can I send at once?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Gmail has sending limits that apply when using this
                    application:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Free Gmail accounts: Up to 500 emails per day</li>
                    <li>
                      Google Workspace accounts: Up to 2,000 emails per day
                    </li>
                  </ul>
                  <p className="mt-2">
                    We recommend sending to smaller batches of recipients to
                    avoid hitting these limits and to ensure better
                    deliverability.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I add attachments to my emails?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Currently, the Email Sender application doesn't support
                    attachments. This feature is planned for a future update.
                    For now, you can include links to files stored in cloud
                    services like Google Drive or Dropbox in your email body.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Why did my email fail to send?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    There are several common reasons why an email might fail to
                    send:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Incorrect Gmail address or App Password</li>
                    <li>You've reached Gmail's sending limits</li>
                    <li>The recipient's email address is invalid</li>
                    <li>Your account has security restrictions</li>
                    <li>Network connectivity issues</li>
                  </ul>
                  <p className="mt-2">
                    Check these issues first, and if problems persist, try again
                    later or contact support.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Can I schedule emails for later?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Email scheduling is not currently available but is planned
                    for a future update. For now, you'll need to send emails
                    manually at your desired time.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Is there a way to save email templates?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Template saving is coming soon! In the meantime, you can
                    save your email templates in a text document and copy-paste
                    them into the application when needed.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
