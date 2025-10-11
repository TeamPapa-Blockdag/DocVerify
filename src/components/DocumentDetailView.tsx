import { motion } from "motion/react";
import { ArrowLeft, Download, ExternalLink, Clock, User } from "lucide-react";
// import { ArrowLeft, Download, ExternalLink, Clock, User, Calendar } from "lucide-react";

import { ShareIcon, VerifyIcon, RevokeIcon, BlockchainIcon } from "./icons";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Document {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  size: string;
  status: "verified" | "pending" | "shared";
  blockchainHash: string;
  shares: number;
}

interface AuditEvent {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  details: string;
}

interface DocumentDetailViewProps {
  document: Document;
  onBack: () => void;
  onShare: () => void;
  onViewAuditTrail: () => void;
}

export function DocumentDetailView({ document, onBack, onShare, onViewAuditTrail }: DocumentDetailViewProps) {
  const auditEvents: AuditEvent[] = [
    {
      id: "1",
      action: "Document Uploaded",
      user: "You",
      timestamp: "2025-10-10 14:23:00",
      details: "Initial upload and blockchain anchoring",
    },
    {
      id: "2",
      action: "Blockchain Verified",
      user: "System",
      timestamp: "2025-10-10 14:23:45",
      details: "Hash: 0x7d8a...3f2c",
    },
    {
      id: "3",
      action: "Shared",
      user: "You",
      timestamp: "2025-10-10 15:30:12",
      details: "Shared with employer@company.com",
    },
    {
      id: "4",
      action: "Viewed",
      user: "employer@company.com",
      timestamp: "2025-10-10 16:45:30",
      details: "Document accessed by recipient",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" onClick={onBack} className="gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Documents
          </Button>

          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="mb-2">{document.name}</h1>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span>{document.size}</span>
                <span>•</span>
                <span>{document.type}</span>
                <span>•</span>
                <span>Uploaded {document.uploadDate}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download
              </Button>
              <Button onClick={onShare} className="gap-2">
                <ShareIcon size={16} />
                Share
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Document Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="p-6">
              <div className="aspect-[8.5/11] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-lg shadow-sm mx-auto mb-4 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-slate-400" />
                  </div>
                  <p className="text-muted-foreground">Document Preview</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Status Card */}
            <Card className="p-6">
              <h3 className="mb-4">Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Verification</span>
                  <Badge variant="default" className="gap-1">
                    <VerifyIcon size={12} />
                    Verified
                  </Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Shares</span>
                  <Badge variant="outline">{document.shares}</Badge>
                </div>
              </div>
            </Card>

            {/* Blockchain Card */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <BlockchainIcon size={20} className="text-blue-600" />
                <h3 className="text-blue-900">Blockchain Verified</h3>
              </div>
              <p className="text-sm text-blue-700 mb-4">
                This document is permanently anchored on BlockDAG
              </p>
              <div className="bg-white/50 rounded-lg p-3 mb-4">
                <p className="text-xs text-muted-foreground mb-1">Transaction Hash</p>
                <code className="text-sm break-all">{document.blockchainHash}</code>
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2">
                <ExternalLink className="w-4 h-4" />
                View on Explorer
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2" onClick={onShare}>
                  <ShareIcon size={16} />
                  Share Document
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2" onClick={onViewAuditTrail}>
                  <Clock className="w-4 h-4" />
                  View Audit Trail
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 text-destructive hover:text-destructive">
                  <RevokeIcon size={16} />
                  Revoke Access
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Audit Trail Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <Card className="p-6">
            <h3 className="mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {auditEvents.slice(0, 3).map((event, index) => (
                <div key={event.id} className="flex gap-4">
                  <div className="relative">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      {event.action === "Document Uploaded" && <Upload className="w-4 h-4 text-blue-600" />}
                      {event.action === "Blockchain Verified" && <VerifyIcon size={16} className="text-blue-600" />}
                      {event.action === "Shared" && <ShareIcon size={16} className="text-blue-600" />}
                      {event.action === "Viewed" && <User className="w-4 h-4 text-blue-600" />}
                    </div>
                    {index < auditEvents.slice(0, 3).length - 1 && (
                      <div className="absolute left-1/2 top-8 w-px h-8 bg-border -translate-x-1/2" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4>{event.action}</h4>
                      <span className="text-sm text-muted-foreground">{event.timestamp.split(" ")[1]}</span>
                    </div>
                    <p className="text-muted-foreground mb-1">{event.details}</p>
                    <p className="text-sm text-muted-foreground">by {event.user}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" onClick={onViewAuditTrail}>
              View Full Audit Trail
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Upload = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);
