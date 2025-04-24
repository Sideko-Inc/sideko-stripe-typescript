import {
  External$IssuingCardholderUpdateBodyIndividualCardIssuing,
  IssuingCardholderUpdateBodyIndividualCardIssuing,
  Schemas$IssuingCardholderUpdateBodyIndividualCardIssuing,
} from "./issuing-cardholder-update-body-individual-card-issuing";
import {
  External$IssuingCardholderUpdateBodyIndividualDob,
  IssuingCardholderUpdateBodyIndividualDob,
  Schemas$IssuingCardholderUpdateBodyIndividualDob,
} from "./issuing-cardholder-update-body-individual-dob";
import {
  External$IssuingCardholderUpdateBodyIndividualVerification,
  IssuingCardholderUpdateBodyIndividualVerification,
  Schemas$IssuingCardholderUpdateBodyIndividualVerification,
} from "./issuing-cardholder-update-body-individual-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Additional information about an `individual` cardholder.
 */
export type IssuingCardholderUpdateBodyIndividual = {
  cardIssuing?: IssuingCardholderUpdateBodyIndividualCardIssuing | undefined;
  dob?: IssuingCardholderUpdateBodyIndividualDob | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  verification?: IssuingCardholderUpdateBodyIndividualVerification | undefined;
};

/**
 * @internal
 * IssuingCardholderUpdateBodyIndividual without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderUpdateBodyIndividual = {
  card_issuing?:
    | External$IssuingCardholderUpdateBodyIndividualCardIssuing
    | undefined;
  dob?: External$IssuingCardholderUpdateBodyIndividualDob | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  verification?:
    | External$IssuingCardholderUpdateBodyIndividualVerification
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderUpdateBodyIndividual
 */
const SchemaIn$IssuingCardholderUpdateBodyIndividual: z.ZodType<
  IssuingCardholderUpdateBodyIndividual, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_issuing:
      Schemas$IssuingCardholderUpdateBodyIndividualCardIssuing.in.optional(),
    dob: Schemas$IssuingCardholderUpdateBodyIndividualDob.in.optional(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    verification:
      Schemas$IssuingCardholderUpdateBodyIndividualVerification.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_issuing: "cardIssuing",
      dob: "dob",
      first_name: "firstName",
      last_name: "lastName",
      verification: "verification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderUpdateBodyIndividual
 */
const SchemaOut$IssuingCardholderUpdateBodyIndividual: z.ZodType<
  External$IssuingCardholderUpdateBodyIndividual, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderUpdateBodyIndividual // the object to be transformed
> = z
  .object({
    cardIssuing:
      Schemas$IssuingCardholderUpdateBodyIndividualCardIssuing.out.optional(),
    dob: Schemas$IssuingCardholderUpdateBodyIndividualDob.out.optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    verification:
      Schemas$IssuingCardholderUpdateBodyIndividualVerification.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardIssuing: "card_issuing",
      dob: "dob",
      firstName: "first_name",
      lastName: "last_name",
      verification: "verification",
    });
  });

export const Schemas$IssuingCardholderUpdateBodyIndividual = {
  in: SchemaIn$IssuingCardholderUpdateBodyIndividual,
  out: SchemaOut$IssuingCardholderUpdateBodyIndividual,
};
