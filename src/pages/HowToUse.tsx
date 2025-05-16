import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Mail,
  Key,
  Users,
  FileText,
  AlertCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function HowToUse() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-2">
        How to Use Email Sender
      </h1>
      <p className="text-gray-500 text-center mb-8">
        A step-by-step guide to sending email campaigns
      </p>

      <Tabs defaultValue="setup" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="setup">Setup</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="recipients">Recipients</TabsTrigger>
          <TabsTrigger value="sending">Sending</TabsTrigger>
        </TabsList>

        <TabsContent value="setup" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-violet-700">
                <Key className="w-5 h-5 mr-2" />
                Setting Up Gmail Credentials
              </CardTitle>
              <CardDescription>
                Before you can send emails, you need to set up your Gmail
                account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Step 1: Create an App Password
                </h3>
                <p className="text-gray-600 mb-4">
                  For security reasons, Gmail requires you to use an App
                  Password instead of your regular password when using
                  third-party apps.
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Go to your Google Account settings at{" "}
                    <a
                      href="https://myaccount.google.com"
                      className="text-violet-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      myaccount.google.com
                    </a>
                  </li>
                  <li>Navigate to Security → 2-Step Verification</li>
                  <li>
                    Scroll down to "App passwords" and create a new app password
                  </li>
                  <li>
                    Select "Mail" as the app and give it a name like "Email
                    Sender"
                  </li>
                  <li>Copy the generated 16-character password</li>
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-amber-800">
                    Important Security Note
                  </p>
                  <p className="text-amber-700 text-sm">
                    Never share your App Password with anyone. This application
                    stores your credentials only in your browser's memory and
                    never saves them to a server.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compose" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-violet-700">
                <FileText className="w-5 h-5 mr-2" />
                Composing Your Email
              </CardTitle>
              <CardDescription>
                Create compelling email content that engages your recipients
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Writing Effective Emails
                </h3>
                <p className="text-gray-600 mb-4">
                  A good email has a clear subject line and concise, valuable
                  content.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Use a clear, specific subject line that previews the email
                    content
                  </li>
                  <li>
                    Keep your email body concise and focused on a single topic
                  </li>
                  <li>
                    Use paragraphs to break up text and make it easier to read
                  </li>
                  <li>
                    Include a clear call-to-action if you want the recipient to
                    do something
                  </li>
                  <li>Personalize your emails using the greeting feature</li>
                </ul>
              </div>

              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                <p className="font-medium text-violet-800 mb-2">
                  Pro Tip: Personalization
                </p>
                <p className="text-violet-700 text-sm">
                  Personalized emails have higher open and response rates. Use
                  the greeting feature to add a personal touch to each email.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recipients" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-violet-700">
                <Users className="w-5 h-5 mr-2" />
                Managing Recipients
              </CardTitle>
              <CardDescription>
                Learn how to add and personalize your recipient list
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Adding Recipients</h3>
                <p className="text-gray-600 mb-4">
                  You can add multiple recipients with personalized greetings.
                </p>
                <p className="text-gray-600 mb-4">
                  Each recipient should be on a new line in the following
                  format:
                </p>
                <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                  email@example.com, Optional personalized greeting
                </div>
                <p className="text-gray-600 mb-2">Examples:</p>
                <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                  john@example.com, Hello John, hope you're doing well!
                  <br />
                  jane@example.com, Hi Jane, following up on our conversation
                  <br />
                  team@company.com, Attention Team Members
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-medium text-green-800 mb-2">Best Practice</p>
                <p className="text-green-700 text-sm">
                  For mass emails, make sure you have permission to email the
                  recipients to comply with anti-spam regulations like GDPR,
                  CAN-SPAM, etc.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sending" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-violet-700">
                <Mail className="w-5 h-5 mr-2" />
                Sending & Monitoring
              </CardTitle>
              <CardDescription>
                Send your emails and track their status in real-time
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Sending Your Campaign
                </h3>
                <p className="text-gray-600 mb-4">
                  Once you've set up your credentials, composed your email, and
                  added recipients, you're ready to send.
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Double-check all your information is correct</li>
                  <li>Click the "Send Emails" button</li>
                  <li>Monitor the status of each email in the right panel</li>
                  <li>Wait for all emails to complete sending</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  Understanding Status Updates
                </h3>
                <p className="text-gray-600 mb-4">
                  The status panel shows you real-time updates for each email:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-500 mr-3" />
                    <span>
                      <strong>Pending</strong>: Email is queued for sending
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    <span>
                      <strong>Success</strong>: Email was sent successfully
                    </span>
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                    <span>
                      <strong>Error</strong>: There was a problem sending the
                      email
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
