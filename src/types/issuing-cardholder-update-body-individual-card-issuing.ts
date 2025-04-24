import {
  External$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance,
  IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance,
  Schemas$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance,
} from "./issuing-cardholder-update-body-individual-card-issuing-user-terms-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderUpdateBodyIndividualCardIssuing
 */
export type IssuingCardholderUpdateBodyIndividualCardIssuing = {
  userTermsAcceptance?:
    | IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance
    | undefined;
};

/**
 * @internal
 * IssuingCardholderUpdateBodyIndividualCardIssuing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderUpdateBodyIndividualCardIssuing = {
  user_terms_acceptance?:
    | External$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderUpdateBodyIndividualCardIssuing
 */
const SchemaIn$IssuingCardholderUpdateBodyIndividualCardIssuing: z.ZodType<
  IssuingCardholderUpdateBodyIndividualCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    user_terms_acceptance:
      Schemas$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      user_terms_acceptance: "userTermsAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderUpdateBodyIndividualCardIssuing
 */
const SchemaOut$IssuingCardholderUpdateBodyIndividualCardIssuing: z.ZodType<
  External$IssuingCardholderUpdateBodyIndividualCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderUpdateBodyIndividualCardIssuing // the object to be transformed
> = z
  .object({
    userTermsAcceptance:
      Schemas$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      userTermsAcceptance: "user_terms_acceptance",
    });
  });

export const Schemas$IssuingCardholderUpdateBodyIndividualCardIssuing = {
  in: SchemaIn$IssuingCardholderUpdateBodyIndividualCardIssuing,
  out: SchemaOut$IssuingCardholderUpdateBodyIndividualCardIssuing,
};
