import { motion } from "motion/react";
import { UploadIcon, VerifyIcon, BlockchainIcon } from "./icons";
import { Check } from "lucide-react";
// import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
// import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { useEffect, useState } from "react";

interface UploadProgressProps {
  onComplete: () => void;
  onCancel: () => void;
}

export function UploadProgress({ onComplete, onCancel }: UploadProgressProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    { id: 1, label: "Uploading", icon: <UploadIcon size={24} /> },
    { id: 2, label: "Encrypting", icon: <VerifyIcon size={24} /> },
    { id: 3, label: "Blockchain Anchoring", icon: <BlockchainIcon size={24} /> },
    { id: 4, label: "Complete", icon: <Check className="w-6 h-6" /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 25 && currentStep < 1) setCurrentStep(1);
    if (progress >= 50 && currentStep < 2) setCurrentStep(2);
    if (progress >= 75 && currentStep < 3) setCurrentStep(3);
    if (progress >= 100) {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }, [progress, currentStep, onComplete]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8"
      >
        <h2 className="mb-8 text-center">Uploading Document</h2>

        {/* Progress Bar */}
        <div className="mb-12">
          <Progress value={progress} className="h-3" />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Processing...</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-8">
          {steps.map((step, index) => {
            const isComplete = index < currentStep;
            const isCurrent = index === currentStep;
            // const isPending = index > currentStep;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    isComplete
                      ? "bg-green-600 text-white"
                      : isCurrent
                      ? "bg-blue-600 text-white animate-pulse"
                      : "bg-slate-200 text-slate-400"
                  }`}
                >
                  {isComplete ? <Check className="w-6 h-6" /> : step.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className={`${
                      isComplete || isCurrent
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </h3>
                  {isCurrent && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-muted-foreground"
                    >
                      In progress...
                    </motion.div>
                  )}
                  {isComplete && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-green-600"
                    >
                      Completed
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action */}
        {progress < 100 && (
          <Button variant="outline" onClick={onCancel} className="w-full">
            Cancel Upload
          </Button>
        )}
      </motion.div>
    </div>
  );
}
