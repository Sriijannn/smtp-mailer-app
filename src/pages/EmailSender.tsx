"use client";

import { useState } from "react";
import axios from "axios";
import {
  Mail,
  Key,
  Send,
  Info,
  AtSign,
  FileText,
  Users,
  AlertCircle,
  CheckCircle2,
  Clock,
  HelpCircle,
  RefreshCw,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { useMobile } from "@/hooks/use-mobile";

interface EmailStatus {
  email: string;
  status: "pending" | "success" | "error";
  timestamp?: number;
}

export default function EmailSender() {
  const [gmailUser, setGmailUser] = useState("");
  const [appPassword, setAppPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [csvInput, setCsvInput] = useState("");
  const [emailStatuses, setEmailStatuses] = useState<EmailStatus[]>([]);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();
  const isMobile = useMobile();

  const sendEmails = async () => {
    const lines = csvInput.trim().split("\n");
    // CSV format: email, optional greeting text
    const emails = lines.map((line) => {
      const parts = line.split(",");
      return { email: parts[0].trim(), greeting: parts[1]?.trim() || "" };
    });

    setEmailStatuses(
      emails.map((e) => ({
        email: e.email,
        status: "pending",
        timestamp: Date.now(),
      }))
    );
    setSending(true);

    for (const { email, greeting } of emails) {
      try {
        // Compose final email body per recipient
        const finalBody = greeting ? `${greeting}\n\n${body}` : body;
        await axios.post("https://smtp-app-backend.onrender.com/send-emails", {
          gmail_user: gmailUser,
          gmail_app_password: appPassword,
          to_email: email,
          subject,
          content: finalBody,
        });

        setEmailStatuses((prev) =>
          prev.map((es) =>
            es.email === email
              ? { ...es, status: "success", timestamp: Date.now() }
              : es
          )
        );

        toast({
          title: "Email sent successfully",
          description: `Email to ${email} has been sent.`,
          variant: "default",
        });
      } catch (error) {
        console.error("Error sending email to", email, error);
        setEmailStatuses((prev) =>
          prev.map((es) =>
            es.email === email
              ? { ...es, status: "error", timestamp: Date.now() }
              : es
          )
        );

        toast({
          title: "Failed to send email",
          description: `Could not send email to ${email}.`,
          variant: "destructive",
        });
      }
    }

    setSending(false);
  };

  const clearStatuses = () => {
    setEmailStatuses([]);
  };

  const isFormValid =
    gmailUser.trim() &&
    appPassword.trim() &&
    subject.trim() &&
    body.trim() &&
    csvInput.trim();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <header className="text-center py-6 px-4 border-b bg-white/80 backdrop-blur-sm">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
          Email Campaign Sender
        </h1>
        <p className="text-gray-500 mt-1">
          Send personalized emails to multiple users.
        </p>
      </header>

      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row"
        } h-[calc(100vh-180px)]`}
      >
        {/* Form Section */}
        <div
          className={`${isMobile ? "h-auto" : "h-full"} ${
            isMobile ? "w-full" : "w-1/2"
          } p-4 overflow-auto`}
        >
          <ScrollArea className="h-full pr-4">
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-violet-700 text-lg">
                    <AtSign className="w-5 h-5 mr-2" />
                    Gmail Credentials
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="gmailUser"
                        className="text-sm font-medium"
                      >
                        Gmail Address
                      </label>
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        id="gmailUser"
                        type="email"
                        className="pl-10"
                        placeholder="your.email@gmail.com"
                        value={gmailUser}
                        onChange={(e) => setGmailUser(e.target.value)}
                        disabled={sending}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="appPassword"
                        className="text-sm font-medium"
                      >
                        Gmail App Password
                      </label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 ml-1"
                            >
                              <HelpCircle className="h-4 w-4 text-gray-500" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>
                              You need to create an App Password in your Google
                              Account settings. This is different from your
                              regular password.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        id="appPassword"
                        type="password"
                        className="pl-10"
                        placeholder="Google App Password"
                        value={appPassword}
                        onChange={(e) => setAppPassword(e.target.value)}
                        disabled={sending}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-violet-700 text-lg">
                    <FileText className="w-5 h-5 mr-2" />
                    Email Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Email Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Enter a compelling subject line"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      disabled={sending}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="body" className="text-sm font-medium">
                      Email Body
                    </label>
                    <Textarea
                      id="body"
                      className="min-h-[150px]"
                      placeholder="Write your email message here..."
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      disabled={sending}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-violet-700 text-lg">
                    <Users className="w-5 h-5 mr-2" />
                    Recipients
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="csvInput" className="text-sm font-medium">
                        Recipient List
                      </label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                            >
                              <Info className="h-4 w-4 text-gray-500" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>
                              Format: email@example.com, Optional greeting text
                            </p>
                            <p>One recipient per line</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Textarea
                      id="csvInput"
                      className="min-h-[120px] font-mono text-sm"
                      placeholder="john@example.com, Hello John&#10;jane@example.com, Hi Jane"
                      value={csvInput}
                      onChange={(e) => setCsvInput(e.target.value)}
                      disabled={sending}
                      spellCheck={false}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Example: john@example.com, Hello John
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={sendEmails}
                    disabled={sending || !isFormValid}
                  >
                    {sending ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Sending Emails...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Emails
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </ScrollArea>
        </div>

        {/* Vertical Separator for desktop */}
        {!isMobile && (
          <div className="h-full flex items-center">
            <Separator orientation="vertical" className="h-[95%] mx-2" />
          </div>
        )}

        {/* Status Section */}
        <div
          className={`${isMobile ? "h-auto" : "h-full"} ${
            isMobile ? "w-full" : "w-1/2"
          } p-4 overflow-hidden flex flex-col`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-violet-700 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Email Status
              {emailStatuses.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {emailStatuses.length}
                </Badge>
              )}
            </h2>
            {emailStatuses.length > 0 && (
              <Button variant="outline" size="sm" onClick={clearStatuses}>
                <RefreshCw className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>

          <Card className="flex-1 overflow-hidden">
            <CardContent className="p-0 h-full">
              <ScrollArea className="h-full max-h-[calc(100vh-250px)]">
                <div className="p-4">
                  {emailStatuses.length > 0 ? (
                    <EmailStatusList emailStatuses={emailStatuses} />
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <Mail className="mx-auto h-12 w-12 mb-4 opacity-20" />
                      <p>No emails have been sent yet</p>
                      <p className="text-sm mt-2">
                        Status updates will appear here in real-time
                      </p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function EmailStatusList({ emailStatuses }: { emailStatuses: EmailStatus[] }) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-amber-500 animate-spin" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "success":
        return "Sent successfully";
      case "error":
        return "Failed to send";
      default:
        return "Sending...";
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-50 border-green-200";
      case "error":
        return "bg-red-50 border-red-200";
      default:
        return "bg-amber-50 border-amber-200";
    }
  };

  const formatTime = (timestamp?: number) => {
    if (!timestamp) return "";
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Sort by timestamp, most recent first
  const sortedStatuses = [...emailStatuses].sort((a, b) => {
    return (b.timestamp || 0) - (a.timestamp || 0);
  });

  return (
    <div className="space-y-3">
      {sortedStatuses.map((status, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg border ${getStatusClass(
            status.status
          )} transition-all`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {getStatusIcon(status.status)}
              <div>
                <p className="font-medium">{status.email}</p>
                <p className="text-sm text-gray-600">
                  {getStatusText(status.status)}
                </p>
              </div>
            </div>
            {status.timestamp && (
              <div className="text-xs text-gray-500">
                {formatTime(status.timestamp)}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
