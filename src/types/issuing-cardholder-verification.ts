import {
  External$IssuingCardholderIdDocument,
  IssuingCardholderIdDocument,
  Schemas$IssuingCardholderIdDocument,
} from "./issuing-cardholder-id-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardholderVerification = {
  document?: IssuingCardholderIdDocument | undefined;
};

/**
 * @internal
 * IssuingCardholderVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderVerification = {
  document?: External$IssuingCardholderIdDocument | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderVerification
 */
const SchemaIn$IssuingCardholderVerification: z.ZodType<
  IssuingCardholderVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document: z.lazy(() => Schemas$IssuingCardholderIdDocument.in.optional()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderVerification
 */
const SchemaOut$IssuingCardholderVerification: z.ZodType<
  External$IssuingCardholderVerification, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderVerification // the object to be transformed
> = z
  .object({
    document: z.lazy(() => Schemas$IssuingCardholderIdDocument.out.optional()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

export const Schemas$IssuingCardholderVerification = {
  in: SchemaIn$IssuingCardholderVerification,
  out: SchemaOut$IssuingCardholderVerification,
};
