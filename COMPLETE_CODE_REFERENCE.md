# Complete Code Reference - DocVerify Platform

This document contains all the code for the blockchain document verification platform.

## Table of Contents
1. [App.tsx](#apptsx)
2. [Custom Icons](#custom-icons)
3. [Authentication Pages](#authentication-pages)
4. [Dashboard & Documents](#dashboard--documents)
5. [Verification & Security](#verification--security)
6. [Marketing & Templates](#marketing--templates)
7. [UI Components (Modified)](#ui-components-modified)

---

## App.tsx

See the main App.tsx file in the project root.

---

## Custom Icons
**File: `/components/icons.tsx`**

```typescript
// Custom Icon Set for Document Verification Platform

export const UploadIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShareIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VerifyIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RevokeIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 9l-6 6M9 9l6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BlockchainIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
```

---

## Authentication Pages

### LoginPage.tsx
**File: `/components/LoginPage.tsx`**

View the complete LoginPage.tsx file in your components folder.

### SignupPage.tsx
**File: `/components/SignupPage.tsx`**

View the complete SignupPage.tsx file in your components folder.

---

## Dashboard & Documents

### DashboardView.tsx
**File: `/components/DashboardView.tsx`**

View the complete DashboardView.tsx file in your components folder.

### DocumentDetailView.tsx
**File: `/components/DocumentDetailView.tsx`**

View the complete DocumentDetailView.tsx file in your components folder.

### ShareModal.tsx
**File: `/components/ShareModal.tsx`**

View the complete ShareModal.tsx file in your components folder.

### UploadProgress.tsx
**File: `/components/UploadProgress.tsx`**

View the complete UploadProgress.tsx file in your components folder.

---

## Verification & Security

### VerificationRequestScreen.tsx
**File: `/components/VerificationRequestScreen.tsx`**

View the complete VerificationRequestScreen.tsx file in your components folder.

### PublicVerificationPage.tsx
**File: `/components/PublicVerificationPage.tsx`**

View the complete PublicVerificationPage.tsx file in your components folder.

### AuditTrailViewer.tsx
**File: `/components/AuditTrailViewer.tsx`**

View the complete AuditTrailViewer.tsx file in your components folder.

### SecuritySettingsPage.tsx
**File: `/components/SecuritySettingsPage.tsx`**

View the complete SecuritySettingsPage.tsx file in your components folder.

---

## Marketing & Templates

### LandingPage.tsx
**File: `/components/LandingPage.tsx`**

View the complete LandingPage.tsx file in your components folder.

### EmailTemplate.tsx
**File: `/components/EmailTemplate.tsx`**

View the complete EmailTemplate.tsx file in your components folder.

### MarketingOnePager.tsx
**File: `/components/MarketingOnePager.tsx`**

View the complete MarketingOnePager.tsx file in your components folder.

---

## UI Components (Modified)

### Button Component (Fixed for refs)
**File: `/components/ui/button.tsx`**

The Button component was modified to use React.forwardRef for proper ref handling:

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
```

---

## Component Summary

### All Components Created:
1. **icons.tsx** - Custom SVG icons (Upload, Share, Verify, Revoke, Blockchain)
2. **LoginPage.tsx** - User login page with email/password
3. **SignupPage.tsx** - User registration page with password strength indicator
4. **LandingPage.tsx** - Marketing landing page with hero, features, CTA
5. **DashboardView.tsx** - Main dashboard (empty state + document grid)
6. **DocumentDetailView.tsx** - Detailed document view with preview
7. **ShareModal.tsx** - Modal for sharing documents with permissions
8. **VerificationRequestScreen.tsx** - Request verification from institutions
9. **PublicVerificationPage.tsx** - Public-facing verification page
10. **AuditTrailViewer.tsx** - Complete activity timeline viewer
11. **SecuritySettingsPage.tsx** - Security settings (keys, 2FA, sessions)
12. **EmailTemplate.tsx** - Access notification email design
13. **MarketingOnePager.tsx** - Print-ready marketing sheet
14. **UploadProgress.tsx** - Animated upload progress indicator

### Features Implemented:
- ✅ Complete authentication flow
- ✅ Blockchain verification badges
- ✅ Document upload with progress tracking
- ✅ Share functionality with expiry options
- ✅ Audit trail tracking
- ✅ Security key management
- ✅ Password strength indicators
- ✅ Social login buttons (Google, GitHub)
- ✅ Responsive design
- ✅ Motion animations
- ✅ Toast notifications
- ✅ Demo navigation menu

---

## Usage Instructions

1. **Start on Login Page**: App defaults to login screen
2. **Navigate**: Use the hamburger menu (☰) in top-right to access all views
3. **Test Features**: Click through login → signup → dashboard → documents
4. **Upload**: Click "Upload Document" to see progress animation
5. **Share**: Click share icon on any document to open share modal
6. **Verify**: Navigate to "Public Verification" to see employer view
7. **Security**: Check "Security Settings" for key management

All components are fully functional with mock data and ready for backend integration!
