import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Zap, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-2">
        About Email Sender
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Learn more about our application and its features
      </p>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>
              Making email campaigns accessible and easy for everyone
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Email Sender was created to simplify the process of sending
              personalized emails to multiple recipients. Whether you're a small
              business owner reaching out to customers, a job seeker contacting
              potential employers, or just someone who needs to send updates to
              a group, our tool makes it easy to create and send personalized
              email campaigns without the complexity of enterprise email
              marketing platforms.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-violet-600" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We take your privacy seriously. Email Sender is designed to be
                secure by default:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Your credentials are never stored on our servers</li>
                <li>All data remains in your browser's memory only</li>
                <li>We use secure connections for all communications</li>
                <li>No tracking or analytics beyond essential functionality</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-violet-600" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Send personalized emails to multiple recipients</li>
                <li>Real-time status tracking for each email</li>
                <li>Custom greetings for each recipient</li>
                <li>Simple, intuitive interface</li>
                <li>Works with any Gmail or Google Workspace account</li>
                <li>No installation required - works in your browser</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-violet-600" />
              Responsible Email Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              We encourage all users to follow responsible email practices:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>
                <strong>Permission-based sending:</strong> Only send emails to
                people who have given you permission to contact them
              </li>
              <li>
                <strong>Respect privacy:</strong> Always include an unsubscribe
                option in marketing emails
              </li>
              <li>
                <strong>Be transparent:</strong> Clearly identify yourself and
                the purpose of your email
              </li>
              <li>
                <strong>Provide value:</strong> Ensure your emails contain
                content that is useful or relevant to recipients
              </li>
              <li>
                <strong>Follow regulations:</strong> Comply with email
                regulations like CAN-SPAM, GDPR, and other applicable laws
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
