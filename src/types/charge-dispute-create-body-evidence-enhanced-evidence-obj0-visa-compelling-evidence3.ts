import {
  ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction,
  External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction,
  Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction,
} from "./charge-dispute-create-body-evidence-enhanced-evidence-obj0-visa-compelling-evidence3-disputed-transaction";
import {
  ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem,
  External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem,
  Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem,
} from "./charge-dispute-create-body-evidence-enhanced-evidence-obj0-visa-compelling-evidence3-prior-undisputed-transactions-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3
 */
export type ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3 =
  {
    disputedTransaction?:
      | ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction
      | undefined;
    priorUndisputedTransactions?:
      | ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem[]
      | undefined;
  };

/**
 * @internal
 * ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3 =
  {
    disputed_transaction?:
      | External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction
      | undefined;
    prior_undisputed_transactions?:
      | External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem[]
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3
 */
const SchemaIn$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3: z.ZodType<
  ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disputed_transaction:
      Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction.in.optional(),
    prior_undisputed_transactions: z
      .array(
        Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3
 */
const SchemaOut$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3: z.ZodType<
  External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3, // output type of this zod object
  z.ZodTypeDef,
  ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3 // the object to be transformed
> = z
  .object({
    disputedTransaction:
      Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransaction.out.optional(),
    priorUndisputedTransactions: z
      .array(
        Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3PriorUndisputedTransactionsItem.out,
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disputedTransaction: "disputed_transaction",
      priorUndisputedTransactions: "prior_undisputed_transactions",
    });
  });

export const Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3 =
  {
    in: SchemaIn$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3,
    out: SchemaOut$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3,
  };
