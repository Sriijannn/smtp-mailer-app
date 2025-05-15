import React from "react";

interface EmailStatus {
  email: string;
  status: "pending" | "success" | "error";
}

interface Props {
  emailStatuses: EmailStatus[];
}

const EmailStatusList: React.FC<Props> = ({ emailStatuses }) => {
  return (
    <div className="space-y-3 max-h-72 overflow-y-auto">
      {emailStatuses.map(({ email, status }) => (
        <div
          key={email}
          className="flex items-center justify-between p-3 rounded-xl border border-indigo-300 bg-indigo-50"
        >
          <span className="truncate text-indigo-900 font-medium">{email}</span>
          <span className="ml-4 flex items-center">
            {status === "pending" && (
              <svg
                className="animate-spin h-6 w-6 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {status === "success" && (
              <svg
                className="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            {status === "error" && (
              <svg
                className="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EmailStatusList;
