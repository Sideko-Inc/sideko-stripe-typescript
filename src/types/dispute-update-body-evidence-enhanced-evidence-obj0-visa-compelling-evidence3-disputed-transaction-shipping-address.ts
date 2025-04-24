import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress
 */
export type DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress =
  {
    city?: (string | string) | undefined;
    country?: (string | string) | undefined;
    line1?: (string | string) | undefined;
    line2?: (string | string) | undefined;
    postalCode?: (string | string) | undefined;
    state?: (string | string) | undefined;
  };

/**
 * @internal
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress =
  {
    city?: (string | string) | undefined;
    country?: (string | string) | undefined;
    line1?: (string | string) | undefined;
    line2?: (string | string) | undefined;
    postal_code?: (string | string) | undefined;
    state?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress
 */
const SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress: z.ZodType<
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    city: z.union([z.string(), z.string()]).optional(),
    country: z.union([z.string(), z.string()]).optional(),
    line1: z.union([z.string(), z.string()]).optional(),
    line2: z.union([z.string(), z.string()]).optional(),
    postal_code: z.union([z.string(), z.string()]).optional(),
    state: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      line1: "line1",
      line2: "line2",
      postal_code: "postalCode",
      state: "state",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress
 */
const SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress: z.ZodType<
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress, // output type of this zod object
  z.ZodTypeDef,
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress // the object to be transformed
> = z
  .object({
    city: z.union([z.string(), z.string()]).optional(),
    country: z.union([z.string(), z.string()]).optional(),
    line1: z.union([z.string(), z.string()]).optional(),
    line2: z.union([z.string(), z.string()]).optional(),
    postalCode: z.union([z.string(), z.string()]).optional(),
    state: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      line1: "line1",
      line2: "line2",
      postalCode: "postal_code",
      state: "state",
    });
  });

export const Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress =
  {
    in: SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress,
    out: SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3DisputedTransactionShippingAddress,
  };
