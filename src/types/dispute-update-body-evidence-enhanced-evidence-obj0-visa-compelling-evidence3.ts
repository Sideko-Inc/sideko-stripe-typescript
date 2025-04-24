import {
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction,
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction,
  Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction,
} from "./dispute-update-body-evidence-enhanced-evidence-obj0-visa-compelling-evidence3-disputed-transaction";
import {
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem,
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem,
  Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem,
} from "./dispute-update-body-evidence-enhanced-evidence-obj0-visa-compelling-evidence3-prior-undisputed-transactions-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3
 */
export type DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3 =
  {
    disputedTransaction?:
      | DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction
      | undefined;
    priorUndisputedTransactions?:
      | DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem[]
      | undefined;
  };

/**
 * @internal
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3 =
  {
    disputed_transaction?:
      | External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction
      | undefined;
    prior_undisputed_transactions?:
      | External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem[]
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3
 */
const SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3: z.ZodType<
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disputed_transaction:
      Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction.in.optional(),
    prior_undisputed_transactions: z
      .array(
        Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem.in,
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disputed_transaction: "disputedTransaction",
      prior_undisputed_transactions: "priorUndisputedTransactions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3
 */
const SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3: z.ZodType<
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3, // output type of this zod object
  z.ZodTypeDef,
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3 // the object to be transformed
> = z
  .object({
    disputedTransaction:
      Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction.out.optional(),
    priorUndisputedTransactions: z
      .array(
        Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem.out,
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disputedTransaction: "disputed_transaction",
      priorUndisputedTransactions: "prior_undisputed_transactions",
    });
  });

export const Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3 =
  {
    in: SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3,
    out: SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3,
  };
