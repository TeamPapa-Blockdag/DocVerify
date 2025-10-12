import { motion } from "motion/react";
import { UploadIcon, ShareIcon, VerifyIcon, BlockchainIcon } from "./icons";
import { FileText, Download, Eye, MoreVertical, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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

interface DashboardViewProps {
  documents: Document[];
  onDocumentClick: (doc: Document) => void;
  onUploadClick: () => void;
  onShareClick: (doc: Document) => void;
}

export function DashboardView({ documents, onDocumentClick, onUploadClick, onShareClick }: DashboardViewProps) {
  const isEmpty = documents.length === 0;

  if (isEmpty) {
    return (
      <div 
        className="min-h-screen p-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.98), rgba(239, 246, 255, 0.98)), url('https://images.unsplash.com/photo-1639322537231-2f206e06af84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29ya3xlbnwxfHx8fDE3NjAyMTkyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="mb-2 text-white">My Documents</h1>
              <p className="text-white/80">Securely store and verify your documents on the blockchain</p>
            </div>
            <Button onClick={onUploadClick} className="gap-2">
              <UploadIcon size={20} />
              Upload Document
            </Button>
          </div>

          {/* Empty State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-32"
          >
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <FileText className="w-16 h-16 text-white" />
            </div>
            <h2 className="mb-4 text-white">No documents yet</h2>
            <p className="text-white/80 mb-8 text-center max-w-md">
              Upload your first document to get started with secure, blockchain-verified storage
            </p>
            <Button onClick={onUploadClick} size="lg" className="gap-2">
              <UploadIcon size={20} />
              Upload Your First Document
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen p-8 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.98), rgba(239, 246, 255, 0.98)), url('https://images.unsplash.com/photo-1639322537231-2f206e06af84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29ya3xlbnwxfHx8fDE3NjAyMTkyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2 text-white">My Documents</h1>
            <p className="text-white/80">
              {documents.length} document{documents.length !== 1 ? "s" : ""} securely stored
            </p>
          </div>
          <Button onClick={onUploadClick} className="gap-2">
            <UploadIcon size={20} />
            Upload Document
          </Button>
        </div>

        {/* Search & Filter */}
        <div className="mb-6 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search documents..." className="pl-10" />
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onDocumentClick(doc)}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onShareClick(doc)}>
                        <ShareIcon className="w-4 h-4 mr-2" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <h3 className="mb-2 truncate" onClick={() => onDocumentClick(doc)}>{doc.name}</h3>
                <p className="text-muted-foreground mb-4">{doc.size} • {doc.type}</p>

                <div className="flex items-center gap-2 mb-4">
                  <Badge
                    variant={doc.status === "verified" ? "default" : "secondary"}
                    className="gap-1"
                  >
                    {doc.status === "verified" && <VerifyIcon size={12} />}
                    {doc.status === "verified" ? "Verified" : doc.status === "shared" ? "Shared" : "Pending"}
                  </Badge>
                  {doc.shares > 0 && (
                    <Badge variant="outline" className="gap-1">
                      <ShareIcon size={12} />
                      {doc.shares}
                    </Badge>
                  )}
                </div>

                {/* Owner Info */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={doc.owner.avatar} alt={doc.owner.name} />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {doc.owner.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{doc.owner.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{doc.owner.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BlockchainIcon size={16} />
                  <span className="truncate">Anchored on BlockDAG</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}