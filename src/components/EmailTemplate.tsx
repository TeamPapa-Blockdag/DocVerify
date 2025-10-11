import { motion } from "motion/react";
import { ShareIcon, VerifyIcon, BlockchainIcon } from "./icons";
import { Mail, Calendar, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function EmailTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
            <h1>Email Template Preview</h1>
          </div>
          <p className="text-muted-foreground">
            This is what recipients see when you share a document
          </p>
        </motion.div>

        {/* Email Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="overflow-hidden">
            {/* Email Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <ShareIcon size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-white">Document Shared With You</h2>
                  <p className="text-blue-100">Secure Access Notification</p>
                </div>
              </div>
            </div>

            {/* Email Body */}
            <div className="p-8 bg-white">
              <p className="mb-6">Hi there,</p>
              
              <p className="mb-6">
                <strong>John Smith</strong> has shared a verified document with you through DocVerify.
              </p>

              {/* Document Info Card */}
              <div className="bg-slate-50 rounded-lg p-6 mb-6 border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">Bachelor of Science Degree</h3>
                    <p className="text-muted-foreground">MIT • May 15, 2023</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="default" className="gap-1">
                    <VerifyIcon size={12} />
                    Blockchain Verified
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Calendar className="w-3 h-3" />
                    Expires in 30 days
                  </Badge>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BlockchainIcon size={16} className="text-blue-600" />
                    <p className="text-sm text-blue-900">Blockchain Verified</p>
                  </div>
                  <p className="text-sm text-blue-700">
                    This document is permanently anchored on BlockDAG, ensuring authenticity.
                  </p>
                </div>

                <Button className="w-full gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Document
                </Button>
              </div>

              {/* Security Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <h4 className="text-amber-900 mb-2">Security Notice</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• This link is unique to you and expires in 30 days</li>
                  <li>• All access is logged and visible to the document owner</li>
                  <li>• You can verify the document's authenticity on the blockchain</li>
                </ul>
              </div>

              <p className="text-muted-foreground mb-6">
                If you have any questions about this document, please contact the sender directly.
              </p>

              <div className="border-t pt-6">
                <p className="text-sm text-muted-foreground">
                  This email was sent by DocVerify, a secure document verification platform.
                  <br />
                  If you did not expect this email, please ignore it.
                </p>
              </div>
            </div>

            {/* Email Footer */}
            <div className="bg-slate-900 p-6 text-center">
              <p className="text-slate-400 text-sm mb-2">
                Powered by DocVerify • Blockchain Document Verification
              </p>
              <div className="flex justify-center gap-4 text-slate-500 text-sm">
                <a href="#" className="hover:text-slate-300">Help Center</a>
                <span>•</span>
                <a href="#" className="hover:text-slate-300">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-slate-300">Unsubscribe</a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Template Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6"
        >
          <Card className="p-6">
            <h3 className="mb-4">Template Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Responsive design works on all devices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Clear call-to-action button</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Security information and expiry details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Blockchain verification badge</span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

const FileIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
