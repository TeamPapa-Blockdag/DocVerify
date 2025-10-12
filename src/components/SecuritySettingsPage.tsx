import { motion } from "motion/react";
import { ArrowLeft, Key, Download, Copy, AlertTriangle, Lock, Eye, EyeOff } from "lucide-react";
// import { ArrowLeft, Key, Download, Copy, Shield, AlertTriangle, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import { Alert, AlertDescription } from "./ui/alert";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { toast } from "sonner";

interface SecuritySettingsPageProps {
  onBack: () => void;
}

export function SecuritySettingsPage({ onBack }: SecuritySettingsPageProps) {
  const [showRecoveryPhrase, setShowRecoveryPhrase] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const recoveryPhrase = "maple forest thunder ocean wisdom crystal mountain river sunset galaxy";
  const privateKey = "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f";

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast(`${label} copied to clipboard!`);
  };

  const handleExportKeys = () => {
    toast("Keys exported successfully!");
  };

  return (
    <div 
      className="min-h-screen p-8 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.97), rgba(239, 246, 255, 0.97)), url('https://images.unsplash.com/photo-1639182697243-9641e4b2f4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmxvY2tjaGFpbnxlbnwxfHx8fDE3NjAyMTk0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 gap-2 text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-white">Security Settings</h1>
          <p className="text-white/80">
            Manage your account security and authentication preferences
          </p>
        </div>

        {/* Warning Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <Alert className="border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              Keep your recovery phrase and private keys secure. Anyone with access to these can control your documents.
            </AlertDescription>
          </Alert>
        </motion.div>

        {/* Recovery Phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Key className="w-5 h-5 text-blue-600" />
              <h2>Recovery Phrase</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Your 12-word recovery phrase. Store it in a safe place offline.
            </p>

            <div className="bg-slate-900 rounded-lg p-6 mb-4 relative">
              {!showRecoveryPhrase && (
                <div className="absolute inset-0 backdrop-blur-sm bg-slate-900/50 rounded-lg flex items-center justify-center">
                  <Button
                    variant="secondary"
                    onClick={() => setShowRecoveryPhrase(true)}
                    className="gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Show Recovery Phrase
                  </Button>
                </div>
              )}
              <div className="grid grid-cols-3 gap-3">
                {recoveryPhrase.split(" ").map((word, index) => (
                  <div key={index} className="bg-slate-800 rounded p-3">
                    <span className="text-slate-500 text-sm mr-2">{index + 1}.</span>
                    <span className="text-white">{word}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => handleCopy(recoveryPhrase, "Recovery phrase")}
                className="flex-1 gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy Phrase
              </Button>
              {showRecoveryPhrase && (
                <Button
                  variant="outline"
                  onClick={() => setShowRecoveryPhrase(false)}
                  className="gap-2"
                >
                  <EyeOff className="w-4 h-4" />
                  Hide
                </Button>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Private Key */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-blue-600" />
              <h2>Private Key</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Your blockchain private key for document signing.
            </p>

            <div className="space-y-4">
              <div>
                <Label htmlFor="privateKey">Private Key (Encrypted)</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="privateKey"
                    type="password"
                    value={privateKey}
                    readOnly
                    className="flex-1 font-mono text-sm"
                  />
                  <Button
                    variant="outline"
                    onClick={() => handleCopy(privateKey, "Private key")}
                    className="gap-2"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Button variant="outline" onClick={handleExportKeys} className="w-full gap-2">
                <Download className="w-4 h-4" />
                Export Encrypted Keys
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Security Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <Card className="p-6">
            <h2 className="mb-6">Security Preferences</h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch
                  checked={twoFactorEnabled}
                  onCheckedChange={setTwoFactorEnabled}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified of document access and security events
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <Label>Automatic Key Rotation</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically rotate encryption keys every 90 days
                  </p>
                </div>
                <Switch defaultChecked={false} />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Session Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6">
            <h2 className="mb-6">Active Sessions</h2>

            <div className="space-y-4">
              {[
                { device: "Chrome on MacBook Pro", location: "San Francisco, CA", current: true, lastActive: "Active now" },
                { device: "Safari on iPhone", location: "San Francisco, CA", current: false, lastActive: "2 hours ago" },
              ].map((session, index) => (
                <div key={index} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4>{session.device}</h4>
                      {session.current && (
                        <Badge variant="default" className="text-xs">Current</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{session.location}</p>
                    <p className="text-sm text-muted-foreground">{session.lastActive}</p>
                  </div>
                  {!session.current && (
                    <Button variant="outline" size="sm" className="text-destructive">
                      Revoke
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4 text-destructive hover:text-destructive">
              Sign Out All Other Sessions
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}