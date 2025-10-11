import { motion } from "motion/react";
import { VerifyIcon } from "./icons";
import { Building2, Mail, Send } from "lucide-react";
// import { Building2, Mail, FileText, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

interface VerificationRequestScreenProps {
  onBack: () => void;
}

export function VerificationRequestScreen({ onBack }: VerificationRequestScreenProps) {
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <VerifyIcon size={32} className="text-white" />
            </div>
            <h1 className="mb-2">Request Document Verification</h1>
            <p className="text-muted-foreground">
              Ask an institution to verify a document on the blockchain
            </p>
          </div>

          {/* Form */}
          <Card className="p-8">
            <div className="space-y-6">
              {/* Institution */}
              <div className="space-y-2">
                <Label htmlFor="institution">Institution Name</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="institution"
                    placeholder="e.g., University of Technology"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Institution Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Institution Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="registrar@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Document Type */}
              <div className="space-y-2">
                <Label htmlFor="docType">Document Type</Label>
                <Select value={documentType} onValueChange={setDocumentType}>
                  <SelectTrigger id="docType">
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="transcript">Transcript</SelectItem>
                    <SelectItem value="certificate">Certificate</SelectItem>
                    <SelectItem value="degree">Degree</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Add any additional information or instructions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-blue-900 mb-2">How it works</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• We'll send a verification request to the institution</li>
                  <li>• They can verify the document authenticity</li>
                  <li>• Once verified, it will be anchored on the blockchain</li>
                  <li>• You'll receive a notification when complete</li>
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-8">
              <Button variant="outline" onClick={onBack} className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1 gap-2">
                <Send className="w-4 h-4" />
                Send Request
              </Button>
            </div>
          </Card>

          {/* Recent Requests */}
          <div className="mt-8">
            <h3 className="mb-4">Recent Requests</h3>
            <div className="space-y-3">
              {[
                { institution: "MIT", status: "Verified", date: "Oct 8, 2025" },
                { institution: "Stanford University", status: "Pending", date: "Oct 7, 2025" },
              ].map((request, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <h4>{request.institution}</h4>
                          <p className="text-muted-foreground">{request.date}</p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          request.status === "Verified"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {request.status}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
