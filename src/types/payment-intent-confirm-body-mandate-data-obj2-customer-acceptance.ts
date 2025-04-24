import {
  External$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline,
  PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline,
  Schemas$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline,
} from "./payment-intent-confirm-body-mandate-data-obj2-customer-acceptance-online";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance
 */
export type PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance = {
  online: PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline;
  type: "online";
};

/**
 * @internal
 * PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance =
  {
    online: External$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline;
    type: "online";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance
 */
const SchemaIn$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance: z.ZodType<
  PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    online:
      Schemas$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline.in,
    type: z.enum(["online"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      online: "online",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance
 */
const SchemaOut$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance: z.ZodType<
  External$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance // the object to be transformed
> = z
  .object({
    online:
      Schemas$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline.out,
    type: z.enum(["online"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      online: "online",
      type: "type",
    });
  });

export const Schemas$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance =
  {
    in: SchemaIn$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance,
    out: SchemaOut$PaymentIntentConfirmBodyMandateDataObj2CustomerAcceptance,
  };
