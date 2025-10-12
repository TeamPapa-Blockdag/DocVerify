import { motion } from "motion/react";
import { Shield, Zap, Lock, Globe, Check, ArrowRight } from "lucide-react";
import { UploadIcon, ShareIcon, VerifyIcon} from "./icons";
// import { UploadIcon, ShareIcon, VerifyIcon, BlockchainIcon } from "./icons";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function MarketingOnePager() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.98)), url('https://images.unsplash.com/photo-1694219782948-afcab5c095d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjAxNzEyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-16 h-16 text-white" />
            <span className="text-4xl text-white">DocVerify</span>
          </div>
          <h1 className="text-6xl mb-6 text-white">
            Blockchain-Powered
            <br />
            Document Verification
          </h1>
          <p className="text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Secure, verify, and share your credentials with unparalleled trust and transparency
          </p>
        </div>
      </section>

      {/* Page Container with Print Styling */}
      <div className="max-w-[8.5in] mx-auto bg-white p-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-blue-600" />
            <h1 className="text-5xl">DocVerify</h1>
          </div>
          <p className="text-2xl text-muted-foreground mb-2">
            Blockchain Document Verification Platform
          </p>
          <Badge className="text-sm">Powered by BlockDAG Technology</Badge>
        </motion.div>

        {/* Hero Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8 text-center"
        >
          <h2 className="text-3xl mb-4 text-white">
            The Future of Document Verification
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Eliminate fraud, reduce verification time from days to seconds, and give your
            credentials the security of blockchain technology.
          </p>
        </motion.div>

        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="mb-4">The Problem</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { stat: "$2.5B", label: "Lost annually to credential fraud" },
              { stat: "7-14 days", label: "Average verification time" },
              { stat: "34%", label: "Of resumes contain false information" },
            ].map((item, index) => (
              <Card key={index} className="p-4 text-center border-2 border-red-200 bg-red-50">
                <div className="text-3xl text-red-600 mb-1">{item.stat}</div>
                <p className="text-sm text-red-700">{item.label}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="mb-4">The DocVerify Solution</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Blockchain Security",
                description: "Immutable proof of authenticity",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Instant Verification",
                description: "Verify in seconds, not days",
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "End-to-End Encryption",
                description: "Military-grade security",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Global Access",
                description: "Share anywhere, anytime",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-4 border-2 border-blue-200 bg-blue-50">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-blue-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-blue-700">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="mb-4 text-center">How It Works</h2>
          <div className="flex items-center justify-between">
            {[
              { icon: <UploadIcon size={24} />, label: "Upload" },
              { icon: <VerifyIcon size={24} />, label: "Verify" },
              { icon: <ShareIcon size={24} />, label: "Share" },
            ].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-2">
                    {step.icon}
                  </div>
                  <p className="text-sm">{step.label}</p>
                </div>
                {index < 2 && (
                  <ArrowRight className="w-8 h-8 text-blue-400 mx-4" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="mb-4">Perfect For</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { title: "Universities", items: ["Diplomas", "Transcripts", "Certifications"] },
              { title: "Employers", items: ["Background checks", "Credential verification", "Compliance"] },
              { title: "Professionals", items: ["Licenses", "Awards", "Publications"] },
            ].map((useCase, index) => (
              <Card key={index} className="p-4">
                <h3 className="mb-3 text-center text-blue-900">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="mb-4">Results That Matter</h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { metric: "99.9%", label: "Fraud Prevention" },
              { metric: "10 sec", label: "Avg. Verification" },
              { metric: "50K+", label: "Documents Verified" },
              { metric: "$500K", label: "Saved in Costs" },
            ].map((result, index) => (
              <Card key={index} className="p-4 text-center bg-green-50 border-green-200">
                <div className="text-2xl text-green-600 mb-1">{result.metric}</div>
                <p className="text-sm text-green-700">{result.label}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-900 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl mb-3 text-white">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-6 text-lg">
            Join thousands of institutions and professionals using DocVerify
          </p>
          <div className="flex gap-4 justify-center mb-6">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Schedule Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
            <span>www.docverify.app</span>
            <span>•</span>
            <span>contact@docverify.app</span>
            <span>•</span>
            <span>1-800-DOC-VERIFY</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}