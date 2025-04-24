import {
  DisputeVisaCompellingEvidence3DisputedTransaction,
  External$DisputeVisaCompellingEvidence3DisputedTransaction,
  Schemas$DisputeVisaCompellingEvidence3DisputedTransaction,
} from "./dispute-visa-compelling-evidence3-disputed-transaction";
import {
  DisputeVisaCompellingEvidence3PriorUndisputedTransaction,
  External$DisputeVisaCompellingEvidence3PriorUndisputedTransaction,
  Schemas$DisputeVisaCompellingEvidence3PriorUndisputedTransaction,
} from "./dispute-visa-compelling-evidence3-prior-undisputed-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputeEnhancedEvidenceVisaCompellingEvidence3 = {
  disputedTransaction?:
    | DisputeVisaCompellingEvidence3DisputedTransaction
    | undefined;
  /**
   * List of exactly two prior undisputed transaction objects for Visa Compelling Evidence 3.0 evidence submission.
   */
  priorUndisputedTransactions: DisputeVisaCompellingEvidence3PriorUndisputedTransaction[];
};

/**
 * @internal
 * DisputeEnhancedEvidenceVisaCompellingEvidence3 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeEnhancedEvidenceVisaCompellingEvidence3 = {
  disputed_transaction?:
    | External$DisputeVisaCompellingEvidence3DisputedTransaction
    | undefined;
  prior_undisputed_transactions: External$DisputeVisaCompellingEvidence3PriorUndisputedTransaction[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeEnhancedEvidenceVisaCompellingEvidence3
 */
const SchemaIn$DisputeEnhancedEvidenceVisaCompellingEvidence3: z.ZodType<
  DisputeEnhancedEvidenceVisaCompellingEvidence3, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disputed_transaction:
      Schemas$DisputeVisaCompellingEvidence3DisputedTransaction.in.optional(),
    prior_undisputed_transactions: z.array(
      Schemas$DisputeVisaCompellingEvidence3PriorUndisputedTransaction.in,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disputed_transaction: "disputedTransaction",
      prior_undisputed_transactions: "priorUndisputedTransactions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeEnhancedEvidenceVisaCompellingEvidence3
 */
const SchemaOut$DisputeEnhancedEvidenceVisaCompellingEvidence3: z.ZodType<
  External$DisputeEnhancedEvidenceVisaCompellingEvidence3, // output type of this zod object
  z.ZodTypeDef,
  DisputeEnhancedEvidenceVisaCompellingEvidence3 // the object to be transformed
> = z
  .object({
    disputedTransaction:
      Schemas$DisputeVisaCompellingEvidence3DisputedTransaction.out.optional(),
    priorUndisputedTransactions: z.array(
      Schemas$DisputeVisaCompellingEvidence3PriorUndisputedTransaction.out,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disputedTransaction: "disputed_transaction",
      priorUndisputedTransactions: "prior_undisputed_transactions",
    });
  });

export const Schemas$DisputeEnhancedEvidenceVisaCompellingEvidence3 = {
  in: SchemaIn$DisputeEnhancedEvidenceVisaCompellingEvidence3,
  out: SchemaOut$DisputeEnhancedEvidenceVisaCompellingEvidence3,
};
