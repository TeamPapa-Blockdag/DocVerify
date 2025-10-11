import { useState } from "react";
import { motion } from "motion/react";
import { ShareIcon } from "./icons";
import { X, Mail, Copy, Check } from "lucide-react";
// import { X, Mail, Calendar, Copy, Check } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import { toast } from "sonner";

interface ShareModalProps {
  documentName: string;
  onClose: () => void;
  onShare: (data: ShareData) => void;
}

interface ShareData {
  email: string;
  expiryDays: string;
  allowDownload: boolean;
  requirePassword: boolean;
}

export function ShareModal({ documentName, onClose, onShare }: ShareModalProps) {
  const [email, setEmail] = useState("");
  const [expiryDays, setExpiryDays] = useState("7");
  const [allowDownload, setAllowDownload] = useState(true);
  const [requirePassword, setRequirePassword] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareLink = `https://docverify.app/share/a7b3f9d2`;

  const handleShare = () => {
    if (!email) {
      toast("Please enter a recipient email");
      return;
    }
    onShare({ email, expiryDays, allowDownload, requirePassword });
    toast("Document shared successfully!");
    onClose();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    toast("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShareIcon size={20} className="text-blue-600" />
              </div>
              <div>
                <h2>Share Document</h2>
                <p className="text-muted-foreground">{documentName}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Recipient Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Recipient Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="employer@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Expiry Options */}
          <div className="space-y-2">
            <Label htmlFor="expiry">Access Expiry</Label>
            <Select value={expiryDays} onValueChange={setExpiryDays}>
              <SelectTrigger id="expiry">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 day</SelectItem>
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
                <SelectItem value="never">Never expires</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Permissions */}
          <div className="space-y-4">
            <h3>Permissions</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Allow Download</Label>
                <p className="text-sm text-muted-foreground">Recipient can download the document</p>
              </div>
              <Switch checked={allowDownload} onCheckedChange={setAllowDownload} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Require Password</Label>
                <p className="text-sm text-muted-foreground">Add extra security with a password</p>
              </div>
              <Switch checked={requirePassword} onCheckedChange={setRequirePassword} />
            </div>
          </div>

          <Separator />

          {/* Share Link */}
          <div className="space-y-2">
            <Label>Share Link</Label>
            <div className="flex gap-2">
              <Input value={shareLink} readOnly className="flex-1" />
              <Button variant="outline" onClick={handleCopyLink} className="gap-2">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Anyone with this link can view the document
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-slate-50 flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleShare} className="flex-1 gap-2">
            <ShareIcon size={16} />
            Send Access Link
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
