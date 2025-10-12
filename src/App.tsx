import { useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { LoginPage } from "./components/LoginPage";
import { LandingPage } from "./components/LandingPage";
import { SignupPage } from "./components/SignupPage";
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
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import {
  Menu,
  X,
  FileText,
  Shield,
  Mail,
  Settings,
  Search,
  ClipboardList,
  CheckCircle,
  LogOut,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

type View =
  | "landing"
  | "login"
  | "signup"
  | "dashboard"
  | "dashboard-empty"
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
  owner: {
    name: string;
    email: string;
    avatar?: string;
    initials: string;
  };
}

export default function App() {
  const [currentView, setCurrentView] = useState<View>("landing");
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );
  const [showShareModal, setShowShareModal] = useState(false);
  const [showUploadProgress, setShowUploadProgress] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const currentUser = {
    name: "John Smith",
    email: "john.smith@example.com",
    avatar: undefined,
    initials: "JS",
  };

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
      owner: {
        name: "John Smith",
        email: "john.smith@example.com",
        initials: "JS",
      },
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
      owner: {
        name: "Sarah Johnson",
        email: "sarah.j@example.com",
        initials: "SJ",
      },
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
      owner: {
        name: "Michael Chen",
        email: "m.chen@example.com",
        initials: "MC",
      },
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

  const handleShare = (data: any) => {
    console.log("Sharing document with:", data);
    setShowShareModal(false);
  };

  const handleUploadClick = () => {
    setShowUploadProgress(true);
  };

  const handleUploadComplete = () => {
    setShowUploadProgress(false);
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
      owner: currentUser,
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
    setCurrentView("landing");
  };

  const authMenuItems = [
    { label: "Login", view: "login" as View },
    { label: "Signup", view: "signup" as View },
  ];

  const dashboardMenuItems = [
    {
      label: "Dashboard (With Docs)",
      view: "dashboard" as View,
      icon: <FileText className="w-4 h-4" />,
    },
    {
      label: "Dashboard (Empty)",
      view: "dashboard-empty" as View,
      icon: <FileText className="w-4 h-4" />,
    },
    {
      label: "Document Detail",
      view: "document-detail" as View,
      icon: <ClipboardList className="w-4 h-4" />,
    },
    {
      label: "Verification Request",
      view: "verification-request" as View,
      icon: <Search className="w-4 h-4" />,
    },
    {
      label: "Public Verification",
      view: "public-verification" as View,
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      label: "Audit Trail",
      view: "audit-trail" as View,
      icon: <ClipboardList className="w-4 h-4" />,
    },
    {
      label: "Security Settings",
      view: "security-settings" as View,
      icon: <Settings className="w-4 h-4" />,
    },
    {
      label: "Email Template",
      view: "email-template" as View,
      icon: <Mail className="w-4 h-4" />,
    },
    {
      label: "Marketing One-Pager",
      view: "marketing-pager" as View,
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Right-side Auth Navigation (before login) */}
      {!isAuthenticated && (
        <>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="fixed top-4 right-4 z-[100] bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {showMenu ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {showMenu && (
            <div className="fixed top-20 right-4 z-[100] bg-white rounded-xl shadow-2xl border p-4 w-64">
              <h3 className="mb-4 pb-2 border-b">Navigation</h3>
              <div className="space-y-2">
                {authMenuItems.map((item, index) => (
                  <Button
                    key={index}
                    variant={currentView === item.view ? "default" : "ghost"}
                    className="w-full justify-start text-sm"
                    onClick={() => {
                      setCurrentView(item.view);
                      setShowMenu(false);
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Top Bar (after login) */}
      {isAuthenticated && (
        <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b shadow-sm z-[90] flex items-center justify-between px-4">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="bg-slate-900 text-white p-2.5 rounded-lg shadow hover:bg-slate-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            {showSidebar ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-semibold">DocVerify</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 hover:bg-slate-50 rounded-lg p-2 transition-colors">
                <div className="text-right hidden sm:block">
                  <p className="text-sm">{currentUser.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {currentUser.email}
                  </p>
                </div>
                <Avatar className="h-10 w-10 border-2 border-blue-200">
                  <AvatarImage
                    src={currentUser.avatar}
                    alt={currentUser.name}
                  />
                  <AvatarFallback className="bg-blue-600 text-white">
                    {currentUser.initials}
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setCurrentView("security-settings")}
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {/* Sidebar (after login) */}
      {isAuthenticated && showSidebar && (
        <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r shadow-lg z-50 overflow-y-auto">
          <div className="p-6">
            <nav className="space-y-1">
              {dashboardMenuItems.map((item, index) => (
                <Button
                  key={index}
                  variant={currentView === item.view ? "default" : "ghost"}
                  className="w-full justify-start gap-2"
                  onClick={() => {
                    if (item.view === "dashboard-empty") {
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
                  }}
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`${isAuthenticated ? "pt-16" : ""} ${
          isAuthenticated && showSidebar ? "ml-64" : ""
        }`}
      >
        {currentView === "landing" && (
          <LandingPage
            onLoginClick={() => setCurrentView("login")}
            onSignupClick={() => setCurrentView("signup")}
          />
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
          <VerificationRequestScreen
            onBack={() => setCurrentView("dashboard")}
          />
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
      </div>

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
