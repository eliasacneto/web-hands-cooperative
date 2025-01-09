import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface ConsentProps {
  onChange: (isChecked: boolean) => void;
  required: boolean;
  classLink?: string;
  classCheckbox?: string;
}

function ConsentCheckBox({
  onChange,
  required,
  classLink,
  classCheckbox,
}: ConsentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <>
      <div className="mb-4">
        <Label className="flex items-start gap-2">
          <Input
            type="checkbox"
            checked={isChecked}
            required={required}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className={`text-sm ${classCheckbox}`}>
            I agree to the{" "}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className={`${classLink} hover:underline font-medium`}
            >
              terms and conditions
            </button>
          </span>
        </Label>
        {required && !isChecked && (
          <span className="text-red-500 text-sm mt-1 block">
            Please agree to the terms and conditions
          </span>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Terms of Use and Privacy Policy</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[70vh] pr-4">
            <div className="space-y-6 text-sm text-gray-700">
              <section>
                <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
                <p>
                  Welcome to our Terms of Use and Privacy Policy. This document
                  was prepared in compliance with the General Data Protection
                  Regulation (GDPR) of the European Union.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">
                  2. Data Collection and Use
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">
                      2.1 Personal Data Collected
                    </h3>
                    <p>We collect the following personal data:</p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Email address</li>
                      <li>WhatsApp number</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">
                      2.2 Purpose of Collection
                    </h3>
                    <p>Your personal data is collected for:</p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Communication about our products and services</li>
                      <li>
                        Communication about products and services from partner
                        companies
                      </li>
                      <li>Sending relevant information about our company</li>
                      <li>Customer service</li>
                      <li>Responding to your requests and questions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">
                  3. Legal Basis for Processing
                </h2>
                <p>We process your personal data based on:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Your explicit consent</li>
                  <li>
                    Our legitimate interests in providing and improving our
                    services
                  </li>
                  <li>Contractual obligations when applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">
                  4. Your Rights under GDPR
                </h2>
                <p>
                  You have the following rights, which will be addressed within
                  30 days of request:
                </p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Right to access your personal data</li>
                  <li>Right to rectify incorrect data</li>
                  <li>Right to be forgotten (data deletion)</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw your consent at any time</li>
                  <li>
                    Right to file a complaint with the supervisory authority
                    (Data Protection Commission - Ireland)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">
                  5. Storage and Security
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">5.1 Retention Period</h3>
                    <p>
                      We retain your personal data for a maximum period of 7
                      years after your last interaction, as permitted by
                      applicable legislation. After this period, your data will
                      be permanently deleted from our systems.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">5.2 Security Measures</h3>
                    <p>
                      We implement the following security measures to protect
                      your data:
                    </p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Database access restricted and password protected</li>
                      <li>Multi-factor authentication for data access</li>
                      <li>Strict access control with operation logs</li>
                      <li>Data encryption in transit and at rest</li>
                      <li>Regular backups with additional protection</li>
                      <li>
                        Periodic security reviews and vulnerability testing
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">6. Data Sharing</h2>
                <p>
                  We do not sell or rent your personal data. We share your data
                  only in the following situations:
                </p>
                <ul className="list-disc pl-5 mt-1">
                  <li>When necessary to provide our services</li>
                  <li>
                    With carefully selected partner companies to offer products
                    and services that may interest you
                  </li>
                  <li>When required by law</li>
                  <li>With your explicit consent</li>
                </ul>

                <div className="mt-4">
                  <h3 className="font-medium mb-1">6.1 Commercial Partners</h3>
                  <p>Our commercial partners are required to:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Maintain data confidentiality</li>
                    <li>Use data only for agreed specific purposes</li>
                    <li>Implement adequate security measures</li>
                    <li>Comply with all GDPR requirements</li>
                    <li>
                      Not share your data with third parties without
                      authorization
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">
                  7. International Data Transfers
                </h2>
                <p>
                  Your data is stored and processed in Ireland, within the
                  European Economic Area (EEA). Any data transfer outside the
                  EEA will be conducted in compliance with GDPR.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">8. Consent</h2>
                <p>
                  By providing your personal data through our form, you consent
                  to:
                </p>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    The collection and processing of your data as described in
                    this policy
                  </li>
                  <li>
                    Receiving communications via the email and WhatsApp provided
                  </li>
                  <li>Sharing your data with selected commercial partners</li>
                  <li>
                    Receiving communications about products and services from
                    partner companies
                  </li>
                  <li>Storage of your data on servers located in Ireland</li>
                </ul>

                <div className="mt-4">
                  <h3 className="font-medium mb-1">8.1 Consent Management</h3>
                  <p>You can at any time:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Opt out of partner commercial communications</li>
                    <li>Revoke your consent for partner sharing</li>
                    <li>
                      Request a complete list of partners with whom your data is
                      shared
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">
                  9. Policy Changes
                </h2>
                <p>
                  We reserve the right to update this policy periodically. We
                  will notify you of any material changes via the email
                  provided.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">10. Contact</h2>
                <p>
                  To exercise your rights or clarify doubts about our privacy
                  policy, contact our Data Protection Officer (DPO):
                </p>
                <p className="mt-2">
                  Email: [DPO email]
                  <br />
                  Phone: [DPO phone]
                  <br />
                  Address: [Company address]
                </p>
                <p className="mt-2">Last updated: [DATE]</p>
              </section>
            </div>
          </ScrollArea>
          <div className="mt-4 flex justify-end">
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ConsentCheckBox;
