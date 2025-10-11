import { motion } from "motion/react";
import { VerifyIcon, BlockchainIcon } from "./icons";
import { Check, X, ExternalLink, Download, Shield, Calendar, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function PublicVerificationPage() {
  const isVerified = true;
  const documentInfo = {
    name: "Bachelor of Science Degree",
    issuer: "Massachusetts Institute of Technology",
    recipientName: "John Smith",
    issueDate: "May 15, 2023",
    documentId: "MIT-BS-2023-12456",
    blockchainHash: "0x7d8a9b2c1e4f5a6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a3f2c",
    verificationDate: "October 10, 2025",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1>Document Verification</h1>
          </div>
          <p className="text-muted-foreground">
            Blockchain-verified credential authentication
          </p>
        </motion.div>

        {/* Verification Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className={`p-8 mb-6 ${isVerified ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                isVerified ? "bg-green-600" : "bg-red-600"
              }`}>
                {isVerified ? (
                  <Check className="w-8 h-8 text-white" />
                ) : (
                  <X className="w-8 h-8 text-white" />
                )}
              </div>
              <div>
                <h2 className={isVerified ? "text-green-900" : "text-red-900"}>
                  {isVerified ? "Document Verified" : "Verification Failed"}
                </h2>
                <p className={isVerified ? "text-green-700" : "text-red-700"}>
                  {isVerified
                    ? "This document is authentic and verified on the blockchain"
                    : "This document could not be verified"}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Document Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 mb-6">
            <h2 className="mb-6">Document Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-muted-foreground mb-1">Document Type</p>
                <p className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  {documentInfo.name}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground mb-1">Issued By</p>
                <p>{documentInfo.issuer}</p>
              </div>

              <div>
                <p className="text-muted-foreground mb-1">Recipient</p>
                <p>{documentInfo.recipientName}</p>
              </div>

              <div>
                <p className="text-muted-foreground mb-1">Issue Date</p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {documentInfo.issueDate}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground mb-1">Document ID</p>
                <code className="text-sm">{documentInfo.documentId}</code>
              </div>

              <div>
                <p className="text-muted-foreground mb-1">Verified On</p>
                <p>{documentInfo.verificationDate}</p>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Blockchain Info */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <BlockchainIcon size={24} className="text-blue-600" />
                <h3 className="text-blue-900">Blockchain Verification</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-blue-700 mb-2">
                    This document has been permanently anchored on the BlockDAG blockchain,
                    ensuring its authenticity and preventing tampering.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">Transaction Hash</p>
                  <div className="bg-white/50 rounded p-3 break-all">
                    <code className="text-sm">{documentInfo.blockchainHash}</code>
                  </div>
                </div>

                <Button variant="outline" className="gap-2 w-full">
                  <ExternalLink className="w-4 h-4" />
                  View on Blockchain Explorer
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Verification Checks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-8 mb-6">
            <h2 className="mb-6">Verification Checks</h2>
            
            <div className="space-y-4">
              {[
                { check: "Document hash matches blockchain record", verified: true },
                { check: "Issuer signature is valid", verified: true },
                { check: "Document has not been revoked", verified: true },
                { check: "Blockchain timestamp is valid", verified: true },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    item.verified ? "bg-green-100" : "bg-red-100"
                  }`}>
                    {item.verified ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <X className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <p>{item.check}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <Button variant="outline" className="flex-1 gap-2">
            <Download className="w-4 h-4" />
            Download Verification Report
          </Button>
          <Button className="flex-1 gap-2">
            <VerifyIcon size={16} />
            Verify Another Document
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-muted-foreground"
        >
          <p className="text-sm">
            Powered by BlockDAG • Secure Document Verification Platform
          </p>
        </motion.div>
      </div>
    </div>
  );
}
