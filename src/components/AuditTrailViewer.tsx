import { motion } from "motion/react";
import { ArrowLeft, Download, Filter } from "lucide-react";
import { VerifyIcon, ShareIcon, RevokeIcon, BlockchainIcon } from "./icons";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

interface AuditEvent {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  details: string;
  ipAddress: string;
  category: "upload" | "verify" | "share" | "access" | "revoke" | "blockchain";
}

interface AuditTrailViewerProps {
  documentName: string;
  onBack: () => void;
}

export function AuditTrailViewer({ documentName, onBack }: AuditTrailViewerProps) {
  const auditEvents: AuditEvent[] = [
    {
      id: "1",
      action: "Document Uploaded",
      user: "John Smith",
      timestamp: "2025-10-10 14:23:00",
      details: "Initial upload via web interface",
      ipAddress: "192.168.1.100",
      category: "upload",
    },
    {
      id: "2",
      action: "Blockchain Anchoring Started",
      user: "System",
      timestamp: "2025-10-10 14:23:15",
      details: "Document hash submitted to BlockDAG network",
      ipAddress: "Internal",
      category: "blockchain",
    },
    {
      id: "3",
      action: "Blockchain Verified",
      user: "System",
      timestamp: "2025-10-10 14:23:45",
      details: "Transaction confirmed: 0x7d8a...3f2c",
      ipAddress: "Internal",
      category: "verify",
    },
    {
      id: "4",
      action: "Document Shared",
      user: "John Smith",
      timestamp: "2025-10-10 15:30:12",
      details: "Shared with employer@company.com (expires in 30 days)",
      ipAddress: "192.168.1.100",
      category: "share",
    },
    {
      id: "5",
      action: "Access Notification Sent",
      user: "System",
      timestamp: "2025-10-10 15:30:15",
      details: "Email sent to employer@company.com",
      ipAddress: "Internal",
      category: "share",
    },
    {
      id: "6",
      action: "Document Viewed",
      user: "employer@company.com",
      timestamp: "2025-10-10 16:45:30",
      details: "Viewed via shared link",
      ipAddress: "203.45.67.89",
      category: "access",
    },
    {
      id: "7",
      action: "Verification Check",
      user: "employer@company.com",
      timestamp: "2025-10-10 16:46:02",
      details: "Blockchain verification confirmed",
      ipAddress: "203.45.67.89",
      category: "verify",
    },
    {
      id: "8",
      action: "Document Downloaded",
      user: "employer@company.com",
      timestamp: "2025-10-10 16:47:15",
      details: "PDF downloaded",
      ipAddress: "203.45.67.89",
      category: "access",
    },
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case "upload":
        return <Upload className="w-4 h-4" />;
      case "verify":
        return <VerifyIcon size={16} />;
      case "share":
        return <ShareIcon size={16} />;
      case "revoke":
        return <RevokeIcon size={16} />;
      case "blockchain":
        return <BlockchainIcon size={16} />;
      default:
        return <Access className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "upload":
        return "bg-blue-100 text-blue-600";
      case "verify":
        return "bg-green-100 text-green-600";
      case "share":
        return "bg-purple-100 text-purple-600";
      case "access":
        return "bg-amber-100 text-amber-600";
      case "revoke":
        return "bg-red-100 text-red-600";
      case "blockchain":
        return "bg-indigo-100 text-indigo-600";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

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
            Back
          </Button>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2">Audit Trail</h1>
              <p className="text-muted-foreground">{documentName}</p>
              <p className="text-muted-foreground">
                Complete timeline of all document activities
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <Card className="p-4">
            <div className="flex gap-4">
              <Input placeholder="Search events..." className="flex-1" />
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6">
            <div className="space-y-0">
              {auditEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="relative flex gap-6 pb-8"
                >
                  {/* Timeline Line */}
                  {index < auditEvents.length - 1 && (
                    <div className="absolute left-6 top-14 w-px h-full bg-border" />
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getCategoryColor(event.category)}`}>
                    {getIcon(event.category)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="mb-1">{event.action}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{event.user}</span>
                          <span>•</span>
                          <span>{event.timestamp}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {event.category}
                      </Badge>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 mt-3">
                      <p className="text-sm mb-2">{event.details}</p>
                      <p className="text-xs text-muted-foreground">
                        IP Address: {event.ipAddress}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6"
        >
          <Card className="p-4">
            <p className="text-muted-foreground mb-1">Total Events</p>
            <p className="text-2xl">{auditEvents.length}</p>
          </Card>
          <Card className="p-4">
            <p className="text-muted-foreground mb-1">Times Shared</p>
            <p className="text-2xl">
              {auditEvents.filter(e => e.category === "share").length}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-muted-foreground mb-1">Times Accessed</p>
            <p className="text-2xl">
              {auditEvents.filter(e => e.category === "access").length}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-muted-foreground mb-1">Verifications</p>
            <p className="text-2xl">
              {auditEvents.filter(e => e.category === "verify").length}
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

const Upload = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const Access = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);
