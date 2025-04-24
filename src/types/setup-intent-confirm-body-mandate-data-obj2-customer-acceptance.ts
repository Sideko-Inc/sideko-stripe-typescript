import {
  External$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline,
  Schemas$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline,
  SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline,
} from "./setup-intent-confirm-body-mandate-data-obj2-customer-acceptance-online";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance
 */
export type SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance = {
  online: SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline;
  type: "online";
};

/**
 * @internal
 * SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance = {
  online: External$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline;
  type: "online";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance
 */
const SchemaIn$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance: z.ZodType<
  SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    online:
      Schemas$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance
 */
const SchemaOut$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance: z.ZodType<
  External$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance // the object to be transformed
> = z
  .object({
    online:
      Schemas$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptanceOnline.out,
    type: z.enum(["online"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      online: "online",
      type: "type",
    });
  });

export const Schemas$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance = {
  in: SchemaIn$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance,
  out: SchemaOut$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance,
};
