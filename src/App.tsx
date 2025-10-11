import { useState } from "react";
import { Toaster } from "sonner";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { LandingPage } from "./components/LandingPage";
import { DashboardView } from "./components/DashboardView";
import { DocumentDetailView } from "./components/DocumentDetailView";
import { ShareModal } from "./components/ShareModal";
import { VerificationRequestScreen } from "./components/VerificationRequestScreen";
import { PublicVerificationPage } from "./components/PublicVerificationPage";
import { AuditTrailViewer } from "./components/AuditTrailViewer";
import { SecuritySettingsPage } from "./components/SecuritySettingsPage";
import { EmailTemplate } from "./components/EmailTemplate";
import { MarketingOnePager } from "./components/MarketingOnePager";
import { UploadProgress } from "./components/UploadProgress";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";

type View =
  | "login"
  | "signup"
  | "landing"
  | "dashboard"
  | "document-detail"
  | "verification-request"
  | "public-verification"
  | "audit-trail"
  | "security-settings"
  | "email-template"
  | "marketing-pager";

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

export default function App() {
  const [currentView, setCurrentView] = useState<View>("landing"); // Changed to "landing"
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );
  const [showShareModal, setShowShareModal] = useState(false);
  const [showUploadProgress, setShowUploadProgress] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Uncommented this

  // Mock documents data
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "Bachelor of Science Degree.pdf",
      type: "PDF",
      uploadDate: "Oct 5, 2025",
      size: "2.4 MB",
      status: "verified",
      blockchainHash:
        "0x7d8a9b2c1e4f5a6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a3f2c",
      shares: 3,
    },
    {
      id: "2",
      name: "Master's Transcript.pdf",
      type: "PDF",
      uploadDate: "Oct 3, 2025",
      size: "1.8 MB",
      status: "verified",
      blockchainHash:
        "0x2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b",
      shares: 1,
    },
    {
      id: "3",
      name: "Professional Certificate.pdf",
      type: "PDF",
      uploadDate: "Oct 1, 2025",
      size: "1.2 MB",
      status: "shared",
      blockchainHash:
        "0x9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c",
      shares: 5,
    },
  ]);

  const handleDocumentClick = (doc: Document) => {
    setSelectedDocument(doc);
    setCurrentView("document-detail");
  };

  const handleShareClick = (doc: Document) => {
    setSelectedDocument(doc);
    setShowShareModal(true);
  };

  interface ShareData {
    email: string;
    permissions: string;
    expiryDate?: string;
  }

  const handleShare = (data: ShareData) => {
    console.log("Sharing document with:", data);
    setShowShareModal(false);
  };

  const handleUploadClick = () => {
    setShowUploadProgress(true);
  };

  const handleUploadComplete = () => {
    setShowUploadProgress(false);
    // Add new document
    const newDoc: Document = {
      id: String(documents.length + 1),
      name: "New Document.pdf",
      type: "PDF",
      uploadDate: "Oct 10, 2025",
      size: "3.1 MB",
      status: "verified",
      blockchainHash:
        "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
      shares: 0,
    };
    setDocuments([newDoc, ...documents]);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView("dashboard");
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    setCurrentView("dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView("login");
  };

  // Demo navigation menu
  const menuItems = [
    { label: "Landing Page", view: "landing" as View },
    { label: "Login Page", view: "login" as View },
    { label: "Signup Page", view: "signup" as View },
    { label: "Dashboard (Empty)", view: "dashboard" as View, empty: true },
    { label: "Dashboard (With Docs)", view: "dashboard" as View },
    { label: "Document Detail", view: "document-detail" as View },
    { label: "Verification Request", view: "verification-request" as View },
    { label: "Public Verification", view: "public-verification" as View },
    { label: "Audit Trail", view: "audit-trail" as View },
    { label: "Security Settings", view: "security-settings" as View },
    { label: "Email Template", view: "email-template" as View },
    { label: "Marketing One-Pager", view: "marketing-pager" as View },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Navigation Toggle */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed top-4 right-4 z-[100] bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-slate-800 transition-colors"
        aria-label="Toggle menu"
      >
        {showMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Demo Navigation Menu */}
      {showMenu && (
        <div className="fixed top-20 right-4 z-[100] bg-white rounded-xl shadow-2xl border p-4 w-64 max-h-[80vh] overflow-y-auto">
          <h3 className="font-semibold mb-4 pb-2 border-b">Demo Navigation</h3>
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant={currentView === item.view ? "default" : "ghost"}
                className="w-full justify-start text-sm"
                onClick={() => {
                  if (item.view === "dashboard" && item.empty) {
                    const tempDocs = documents;
                    setDocuments([]);
                    setCurrentView("dashboard");
                    setTimeout(() => setDocuments(tempDocs), 100);
                  } else if (
                    item.view === "document-detail" &&
                    documents.length > 0
                  ) {
                    setSelectedDocument(documents[0]);
                    setCurrentView(item.view);
                  } else if (
                    item.view === "audit-trail" &&
                    documents.length > 0
                  ) {
                    setSelectedDocument(documents[0]);
                    setCurrentView(item.view);
                  } else {
                    setCurrentView(item.view);
                  }
                  setShowMenu(false);
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      {currentView === "landing" && (
        <LandingPage onGetStarted={() => setCurrentView("signup")} />
      )}

      {currentView === "login" && (
        <LoginPage
          onLogin={handleLogin}
          onSignupClick={() => setCurrentView("signup")}
        />
      )}

      {currentView === "signup" && (
        <SignupPage
          onSignup={handleSignup}
          onLoginClick={() => setCurrentView("login")}
        />
      )}

      {currentView === "dashboard" && (
        <DashboardView
          documents={documents}
          onDocumentClick={handleDocumentClick}
          onUploadClick={handleUploadClick}
          onShareClick={handleShareClick}
        />
      )}

      {currentView === "document-detail" && selectedDocument && (
        <DocumentDetailView
          document={selectedDocument}
          onBack={() => setCurrentView("dashboard")}
          onShare={() => setShowShareModal(true)}
          onViewAuditTrail={() => setCurrentView("audit-trail")}
        />
      )}

      {currentView === "verification-request" && (
        <VerificationRequestScreen onBack={() => setCurrentView("dashboard")} />
      )}

      {currentView === "public-verification" && <PublicVerificationPage />}

      {currentView === "audit-trail" && selectedDocument && (
        <AuditTrailViewer
          documentName={selectedDocument.name}
          onBack={() => setCurrentView("document-detail")}
        />
      )}

      {currentView === "security-settings" && (
        <SecuritySettingsPage onBack={() => setCurrentView("dashboard")} />
      )}

      {currentView === "email-template" && <EmailTemplate />}

      {currentView === "marketing-pager" && <MarketingOnePager />}

      {/* Modals */}
      {showShareModal && selectedDocument && (
        <ShareModal
          documentName={selectedDocument.name}
          onClose={() => setShowShareModal(false)}
          onShare={handleShare}
        />
      )}

      {showUploadProgress && (
        <UploadProgress
          onComplete={handleUploadComplete}
          onCancel={() => setShowUploadProgress(false)}
        />
      )}

      <Toaster />
    </div>
  );
}
