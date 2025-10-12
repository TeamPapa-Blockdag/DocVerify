import { useState } from "react";
import {
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  Shield,
  Clock,
  User,
  AlertCircle,
  Lock,
  ChevronDown,
  ChevronUp,
  Mail,
  KeyRound,
  RefreshCw,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Alert, AlertDescription } from "./ui/alert";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner";

// interface DocumentReviewPageProps {
//   onBack?: () => void;
// }

export function DocumentReviewPage() {
  // Two-step verification states
  const [isTokenVerified, setIsTokenVerified] = useState(false);
  const [tokenInput, setTokenInput] = useState("");
  const [isVerifyingToken, setIsVerifyingToken] = useState(false);
  const [tokenError, setTokenError] = useState("");
  const [resendingToken, setResendingToken] = useState(false);

  // Document view states
  const [showFullHash, setShowFullHash] = useState(false);
  const [showAuditTrail, setShowAuditTrail] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);

  // Mock data - would come from the verification link
  const CORRECT_TOKEN = "VERIFY-2024-XK9P-L3M7"; // This would be generated on the backend
  const reviewerEmail = "reviewer@example.com"; // Would come from the link

  const document = {
    name: "Q4_Financial_Report_2024.pdf",
    type: "PDF Document",
    size: "2.4 MB",
    hash: "a3f5d8b9c2e1f4a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1",
    uploadDate: "2024-10-05 14:32:00 UTC",
    blockchainStatus: "Anchored on BlockDAG",
    blockNumber: "1,234,567",
    transactionId: "tx_9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1",
  };

  const sharedBy = {
    name: "Sarah Mitchell",
    email: "s.mitchell@company.com",
    role: "Finance Director",
    company: "Acme Corporation",
    avatar: "https://i.pravatar.cc/150?img=5",
  };

  const verificationMessage = {
    subject: "Document Verification Request",
    message:
      "Please review and verify this financial report. Your verification is needed for compliance purposes.",
    sharedDate: "2024-10-11 09:15:00 UTC",
  };

  const auditTrail = [
    {
      action: "Document Uploaded",
      timestamp: "2024-10-05 14:32:00 UTC",
      user: "Sarah Mitchell",
      details: "Original document uploaded to platform",
    },
    {
      action: "Blockchain Anchored",
      timestamp: "2024-10-05 14:32:15 UTC",
      user: "System",
      details: "Document hash anchored on BlockDAG",
    },
    {
      action: "Verification Link Created",
      timestamp: "2024-10-11 09:15:00 UTC",
      user: "Sarah Mitchell",
      details: "Shared with external reviewer",
    },
  ];

  const handleTokenVerification = () => {
    setIsVerifyingToken(true);
    setTokenError("");

    // Simulate API call
    setTimeout(() => {
      if (tokenInput.trim().toUpperCase() === CORRECT_TOKEN) {
        setIsTokenVerified(true);
        toast.success("Token verified successfully!");
      } else {
        setTokenError(
          "Invalid verification token. Please check your email and try again."
        );
        toast.error("Invalid token");
      }
      setIsVerifyingToken(false);
    }, 1000);
  };

  const handleResendToken = () => {
    setResendingToken(true);

    // Simulate API call to resend token
    setTimeout(() => {
      toast.success(`Verification token resent to ${reviewerEmail}`);
      setResendingToken(false);
    }, 1500);
  };

  const handleVerifyDocument = () => {
    setVerificationComplete(true);
    toast.success("Document verified successfully!");
  };

  const handleDownload = () => {
    toast.info("Downloading document...");
  };

  // Token Entry Screen
  if (!isTokenVerified) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdmVyaWZpY2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjAyMjQ2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Blockchain background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-slate-900/95 to-purple-950/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 max-w-md min-h-screen flex items-center justify-center">
          <Card className="w-full bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <Shield className="w-20 h-20 text-blue-400" />
                    <Lock className="w-8 h-8 text-yellow-400 absolute -bottom-1 -right-1" />
                  </div>
                </div>
                <h1 className="text-white mb-2">Secure Document Access</h1>
                <p className="text-gray-300 text-sm">
                  Enter the verification token sent to your email
                </p>
              </div>

              {/* Info Alert */}
              <Alert className="mb-6 bg-blue-500/10 border-blue-500/30">
                <Mail className="h-5 w-5 text-blue-400" />
                <AlertDescription className="text-blue-100 text-sm">
                  A verification token has been sent to{" "}
                  <strong>{reviewerEmail}</strong>. Please check your email and
                  enter the token below.
                </AlertDescription>
              </Alert>

              {/* Token Input Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="token" className="text-gray-300 mb-2 block">
                    Verification Token
                  </Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="token"
                      type="text"
                      placeholder="VERIFY-XXXX-XXXX-XXXX"
                      value={tokenInput}
                      onChange={(e) => {
                        setTokenInput(e.target.value.toUpperCase());
                        setTokenError("");
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && tokenInput.trim()) {
                          handleTokenVerification();
                        }
                      }}
                      className="pl-11 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-blue-500"
                      disabled={isVerifyingToken}
                    />
                  </div>
                  {tokenError && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {tokenError}
                    </p>
                  )}
                  <p className="text-gray-300 text-xs mt-2">
                    Token format: VERIFY-XXXX-XXXX-XXXX
                  </p>
                </div>

                {/* Verify Button */}
                <Button
                  onClick={handleTokenVerification}
                  disabled={!tokenInput.trim() || isVerifyingToken}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isVerifyingToken ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <KeyRound className="w-4 h-4 mr-2" />
                      Verify Token
                    </>
                  )}
                </Button>

                <Separator className="bg-slate-700" />

                {/* Resend Token */}
                <div className="text-center">
                  <p className="text-gray-300 text-sm mb-3">
                    Didn't receive the token?
                  </p>
                  <Button
                    onClick={handleResendToken}
                    disabled={resendingToken}
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    {resendingToken ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Resending...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Resend Token
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <div className="flex gap-2">
                  <Lock className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white text-sm mb-1">Security Notice</h3>
                    <p className="text-gray-200 text-xs">
                      This verification token is unique and time-limited. It
                      ensures that only authorized recipients can access the
                      shared document. Never share this token with anyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Document Review Screen (shown after token verification)
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdmVyaWZpY2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjAyMjQ2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Blockchain background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-slate-900/95 to-purple-950/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-white mb-2">Document Verification Request</h1>
          <p className="text-gray-300">
            You've been invited to review and verify a blockchain-secured
            document
          </p>
        </div>

        {/* Token Verified Success Alert */}
        <Alert className="mb-6 bg-green-500/20 border-green-500/50">
          <CheckCircle2 className="h-5 w-5 text-green-400" />
          <AlertDescription className="text-green-100">
            Access granted! Your token has been verified successfully.
          </AlertDescription>
        </Alert>

        {/* Verification Status Alert */}
        {verificationComplete && (
          <Alert className="mb-6 bg-green-500/20 border-green-500/50">
            <CheckCircle2 className="h-5 w-5 text-green-400" />
            <AlertDescription className="text-green-100">
              Document verification completed successfully! The document
              integrity has been confirmed through blockchain verification.
            </AlertDescription>
          </Alert>
        )}

        {/* Shared By Section */}
        <Card className="mb-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <div className="p-6">
            <h2 className="text-white mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-400" />
              Shared By
            </h2>
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={sharedBy.avatar} />
                <AvatarFallback className="bg-blue-500 text-white">
                  {sharedBy.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-white">{sharedBy.name}</h3>
                <p className="text-gray-300">{sharedBy.role}</p>
                <p className="text-gray-300">{sharedBy.company}</p>
                <p className="text-blue-400 text-sm mt-1">{sharedBy.email}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-300 text-sm">Shared on</p>
                <p className="text-white text-sm">
                  {verificationMessage.sharedDate}
                </p>
              </div>
            </div>
            {verificationMessage.message && (
              <div className="mt-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <p className="text-gray-300 text-sm italic">
                  "{verificationMessage.message}"
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Document Information */}
        <Card className="mb-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <div className="p-6">
            <h2 className="text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              Document Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Document Preview */}
              <div className="flex items-center justify-center bg-slate-900/50 rounded-lg p-8 border border-slate-700">
                <div className="text-center">
                  <FileText className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-white mb-1">{document.name}</p>
                  <p className="text-gray-400 text-sm">
                    {document.type} • {document.size}
                  </p>
                </div>
              </div>

              {/* Document Details */}
              <div className="space-y-4">
                <div>
                  <label className="text-gray-300 text-sm block mb-1">
                    Document Name
                  </label>
                  <p className="text-white">{document.name}</p>
                </div>
                <div>
                  <label className="text-gray-300 text-sm block mb-1">
                    Upload Date
                  </label>
                  <p className="text-white">{document.uploadDate}</p>
                </div>
                <div>
                  <label className="text-gray-300 text-sm block mb-1">
                    File Size
                  </label>
                  <p className="text-white">{document.size}</p>
                </div>
                <div>
                  <label className="text-gray-300 text-sm block mb-1">
                    File Type
                  </label>
                  <p className="text-white">{document.type}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Blockchain Verification */}
        <Card className="mb-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <div className="p-6">
            <h2 className="text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              Blockchain Verification
            </h2>

            {/* Status Badge */}
            <div className="mb-6">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-4 py-2">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                {document.blockchainStatus}
              </Badge>
            </div>

            {/* Verification Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <label className="text-gray-300 text-sm block mb-1">
                    Block Number
                  </label>
                  <p className="text-white">{document.blockNumber}</p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <label className="text-gray-300 text-sm block mb-1">
                    Transaction ID
                  </label>
                  <p className="text-white text-sm font-mono">
                    {document.transactionId.substring(0, 20)}...
                  </p>
                </div>
              </div>

              {/* Document Hash */}
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <label className="text-gray-300 text-sm block mb-2">
                  Document Hash (SHA-256)
                </label>
                <div className="flex items-center gap-2">
                  <code className="text-blue-400 text-sm font-mono flex-1 break-all">
                    {showFullHash
                      ? document.hash
                      : `${document.hash.substring(0, 32)}...`}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFullHash(!showFullHash)}
                    className="text-blue-400 hover:text-blue-300 hover:bg-slate-700"
                  >
                    {showFullHash ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Verification Explanation */}
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-100 text-sm">
                      This document has been cryptographically secured and
                      anchored on the BlockDAG blockchain. The hash above is a
                      unique fingerprint of the document. Any modification to
                      the document would result in a completely different hash,
                      ensuring document integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Audit Trail */}
        <Card className="mb-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <div className="p-6">
            <button
              onClick={() => setShowAuditTrail(!showAuditTrail)}
              className="w-full flex items-center justify-between text-white hover:text-blue-400 transition-colors"
            >
              <h2 className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Audit Trail
              </h2>
              {showAuditTrail ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {showAuditTrail && (
              <div className="mt-6 space-y-4">
                {auditTrail.map((entry, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                      {index < auditTrail.length - 1 && (
                        <div className="w-0.5 h-full bg-slate-700 mt-1"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-white">{entry.action}</h3>
                        <span className="text-gray-300 text-sm">
                          {entry.timestamp}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-1">
                        By: {entry.user}
                      </p>
                      <p className="text-gray-300 text-sm">{entry.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>

        {/* Security Notice */}
        <Alert className="mb-6 bg-yellow-500/10 border-yellow-500/30">
          <Lock className="h-5 w-5 text-yellow-400" />
          <AlertDescription className="text-yellow-100">
            This is a secure, time-limited verification link. Do not share this
            link with others. If you believe you received this link in error,
            please contact the sender.
          </AlertDescription>
        </Alert>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleVerifyDocument}
            disabled={verificationComplete}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          >
            <CheckCircle2 className="w-5 h-5 mr-2" />
            {verificationComplete ? "Verification Complete" : "Verify Document"}
          </Button>
          <Button
            onClick={handleDownload}
            variant="outline"
            className="flex-1 border-blue-500 text-blue-400 hover:bg-blue-500/10"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Document
          </Button>
          <Button
            variant="outline"
            className="border-slate-500 text-slate-200 hover:bg-slate-700 hover:text-white"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View on Blockchain
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Separator className="mb-6 bg-slate-700" />
          <p className="text-gray-300 text-sm mb-2">
            Powered by BlockDAG Blockchain Technology
          </p>
          <p className="text-gray-400 text-xs">
            © 2024 Document Verification Platform. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
