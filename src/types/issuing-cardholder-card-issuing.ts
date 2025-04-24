import {
  External$IssuingCardholderUserTermsAcceptance,
  IssuingCardholderUserTermsAcceptance,
  Schemas$IssuingCardholderUserTermsAcceptance,
} from "./issuing-cardholder-user-terms-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardholderCardIssuing = {
  userTermsAcceptance?: IssuingCardholderUserTermsAcceptance | undefined;
};

/**
 * @internal
 * IssuingCardholderCardIssuing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderCardIssuing = {
  user_terms_acceptance?:
    | External$IssuingCardholderUserTermsAcceptance
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderCardIssuing
 */
const SchemaIn$IssuingCardholderCardIssuing: z.ZodType<
  IssuingCardholderCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    user_terms_acceptance:
      Schemas$IssuingCardholderUserTermsAcceptance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      user_terms_acceptance: "userTermsAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderCardIssuing
 */
const SchemaOut$IssuingCardholderCardIssuing: z.ZodType<
  External$IssuingCardholderCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderCardIssuing // the object to be transformed
> = z
  .object({
    userTermsAcceptance:
      Schemas$IssuingCardholderUserTermsAcceptance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      userTermsAcceptance: "user_terms_acceptance",
    });
  });

export const Schemas$IssuingCardholderCardIssuing = {
  in: SchemaIn$IssuingCardholderCardIssuing,
  out: SchemaOut$IssuingCardholderCardIssuing,
};
